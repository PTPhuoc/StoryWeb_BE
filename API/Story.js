const StoryModel = require("../Model/StoryModel");
const uri = require("express").Router();

uri.post("/GetChapter", async (req, res) => {
    const Story = await StoryModel.find({Name: req.body.Name , Number_Chapter: req.body.NumberChapter})
    if(!Story || Story.length === 0){
        res.status(404).send({Status: "Not Found"})
    }else{
        res.send(Story)
    }
})

uri.post("/GetAllChapter", async (req, res) => {
    const Story = await StoryModel.find({Name: req.body.Name})
    if(!Story || Story.length === 0){
        res.status(404).send({Status: "Not Found"})
    }else{
        res.send(Story)
    }
})

module.exports = uri