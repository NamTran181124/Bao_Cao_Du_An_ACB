const { json } = require("body-parser");
const db = require("../models/db");

const postUser = {
  getAllUser: (req, res) => {
    db.query("SELECT * FROM user", (error, results) => {
      if (error) {
        console.error("Error querying database:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json(results);
    });
  },

  postUser: (req, res) => {
    
    console.log("data", req.body);
    const userData = req.body;
    db.query("INSERT INTO user SET ?", userData, (error, results) => {
      if (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
     
      res
        .status(201)
        .json({ message: "User created successfully", user: userData });
    });
  },
  findSDT: (req, res) => {
    const sdt = req.params.sdt; 

    if (!sdt) {
      return res.status(400).json({ error: "Vui lòng nhập số điện thoại" });
    }
    db.query("SELECT * FROM user WHERE sdt = ? ", [sdt], (error, results) => {
      if (error) {
        console.log("Lỗi server");
        return res.status(500).json({ error: "Lỗi server" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Số điện thoại không tồn tại" });
      }
      const user = results[0] ; 
      
      res.status(200).json({ message: 'Đã tìm thấy', user });
    });
},

  login: (req, res) => {
    console.log("mat khua và sdt", req.body);
    // Lấy thông tin đăng nhập từ yêu cầu
    const { sdt, password } = req.body;

    // Kiểm tra xem có thông tin đăng nhập được cung cấp không
    if (!sdt || !password) {
      return res
        .status(400)
        .json({ error: "Số điện thoại và mật khẩu là bắt buộc" });
    }

    // Thực hiện truy vấn SQL để tìm kiếm người dùng với số điện thoại đã cung cấp
    db.query("SELECT * FROM user WHERE sdt = ?", [sdt], (error, results) => {
      if (error) {
        console.error("Error querying database:", error);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Kiểm tra xem có người dùng được tìm thấy không
      if (results.length === 0) {
        return res.status(404).json({ error: "Người dùng không tồn tại" });
      }

      // Lấy thông tin người dùng từ kết quả truy vấn
      const user = results[0];

      // So sánh mật khẩu được cung cấp với mật khẩu đã lưu trong cơ sở dữ liệu
      if (password !== user.password) {
        return res.status(401).json({ error: "Mật khẩu không chính xác" });
      }

      // Nếu mọi thứ đều hợp lệ, trả về thông tin người dùng
      res.status(200).json({ message: "Đăng nhập thành công", user });
    });
  },
  thaydoiSoTien: (req, res) => {
    const id_nguoi_gui = req.params.idng_gui;
    const so_tien_gui = req.params.sotien;
    const id_nguoi_nhan = req.params.idng_nhan;

    // Kiểm tra tính hợp lệ của số tiền gửi
    if (isNaN(so_tien_gui) || so_tien_gui <= 0) {
        return res.status(400).json({ error: "Số tiền gửi không hợp lệ" });
    }

    // Sử dụng giao dịch để đảm bảo tính nhất quán
    db.beginTransaction((err) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi server khi bắt đầu giao dịch" });
        }

        // Kiểm tra xem người gửi có đủ số tiền không
        db.query('SELECT sotien FROM user WHERE id_user = ?', [id_nguoi_gui], (err, results) => {
            if (err) {
                db.rollback(() => {
                    console.error('Lỗi khi truy vấn số tiền của người gửi:', err);
                    return res.status(500).json({ error: 'Lỗi server khi truy vấn số tiền của người gửi' });
                });
            }

            const so_tien_hien_co = results[0].sotien;

            if (so_tien_gui > so_tien_hien_co) {
                db.rollback(() => {
                    console.error('Số tiền của bạn không đủ');
                    return res.status(400).json({ error: 'Số tiền của bạn không đủ' });
                });
            } else {
                // Thực hiện trừ số tiền từ người gửi
                db.query('UPDATE user SET sotien = sotien - ? WHERE id_user = ?', [so_tien_gui, id_nguoi_gui], (error1, results1) => {
                    if (error1) {
                        db.rollback(() => {
                            console.error('Lỗi khi cập nhật số tiền của người gửi:', error1);
                            return res.status(500).json({ error: 'Lỗi server khi cập nhật số tiền của người gửi' });
                        });
                    }

                    // Thực hiện cộng số tiền cho người nhận
                    db.query('UPDATE user SET sotien = sotien + ? WHERE id_user = ?', [so_tien_gui, id_nguoi_nhan], (error2, results2) => {
                        if (error2) {
                            db.rollback(() => {
                                console.error('Lỗi khi cập nhật số tiền của người nhận:', error2);
                                return res.status(500).json({ error: 'Lỗi server khi cập nhật số tiền của người nhận' });
                            });
                        }

                        // Giao dịch thành công
                        db.commit((err) => {
                            if (err) {
                                db.rollback(() => {
                                    console.error('Lỗi khi commit giao dịch:', err);
                                    return res.status(500).json({ error: 'Lỗi server khi commit giao dịch' });
                                });
                            }
                            // Trả về thông báo thành công nếu không có lỗi xảy ra
                            res.status(200).json({ message: 'Thay đổi số tiền thành công' });
                        });
                    });
                });
            }
        });
    });
}




};

module.exports = postUser;
