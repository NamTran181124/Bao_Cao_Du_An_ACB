const db = require("../models/db");

const message = {
  getAllMessage: (req, res) => {
    db.query("SELECT * FROM messages", (error, results) => {
      if (error) {
        console.error("Error querying database:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json(results);
    });
  },

  postMessage: (req, res) => {
    const { id_nguoi_chuyen, id_nguoi_nhan, noidung, sotien,times } = req.params;
  
    // Tạo object chứa dữ liệu tin nhắn
    const messageData = {
      id_nguoi_chuyen,
      id_nguoi_nhan,
      noidung,
      sotien,
      times
    };
  
    // Thực hiện truy vấn để chèn dữ liệu vào cơ sở dữ liệu
    db.query("INSERT INTO messages SET ?", messageData, (error, results) => {
      if (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
  
      // Trả về phản hồi thành công nếu không có lỗi
      res.status(201).json({ message: "Message created successfully", messageData });
    });
  },
  
  findMessage: (req, res) => {
    const id = req.params.id; 

    if (!id) {
      return res.status(400).json({ error: "Vui lòng nhập id thông báo" });
    }
    db.query("SELECT * FROM messages WHERE id = ? ", [id], (error, results) => {
      if (error) {
        console.log("Lỗi server");
        return res.status(500).json({ error: "Lỗi server" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "id không tồn tại" });
      }
      const message = results[0] ; 
      
      res.status(200).json({ message: 'Đã tìm thấy', message });
    });
  }
};

module.exports = message;
