
const express = require("express")

const app = express();

app.get("/", (req,res) =>
{
    res.send("Yes Crud Application")
})











app.listen(3500, () =>
{
    console.log("Running at Port 3500")
})
