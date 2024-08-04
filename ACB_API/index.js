const express = require('express');
const app = express();
const postUser = require('./routes/user');
const message = require('./routes/mesages');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// Định tuyến các routes
app.use('/students', postUser);
app.use('/message', message);

app.listen(3000, () => {
  console.log("Server is running ......");
});
