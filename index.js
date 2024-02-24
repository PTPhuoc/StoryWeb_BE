const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Story = require("./API/Story.js");
const Book = require("./API/Book.js")
const Account = require("./API/Account.js")
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Store_Web");

app.use(express.json());
app.use(cors())

const db = mongoose.connection;
db.once('open', () => {
    console.log('Kết nối MongoDB thành công');
});

app.use("/Story", Story);
app.use("/Book", Book);
app.use("/Account", Account);

app.listen(9000, () => {
  console.log("Server is running!");
});
