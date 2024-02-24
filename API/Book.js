const uri = require("express").Router();
const BookModel = require("../Model/BookModel.js")

uri.post("/ListByName", async (req, res) => {
    const Books = await BookModel.find({Name: { $regex: req.body.Name, $options: "i" }})
    if(!Books || Books.length === 0){
        res.status(404).send({Status: "Fault"})
    }else{
        res.send(Books)
    }
})

uri.get("/Popular", async (req, res) => {
    const Popular = await BookModel.find().limit(3).sort({Views: -1 })
    res.send(Popular)
})

uri.get("/ListAll", async (req, res) => {
    const Books = await BookModel.find()
    res.send(Books)
})

uri.post("/GetBookInfor", async (req, res) => {
    const BookInfor = await BookModel.findOne({Name: req.body.Name})
    res.send(BookInfor)
})

uri.post("/AddViews", async (req, res) => {
    await BookModel.updateOne({Name: req.body.Name}, {$inc : {"Views": 1}})
    res.status(200).send({Status: "Success"})
})

module.exports = uri