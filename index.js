const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("Server is running...");
});

app.use(express.static("public"));
app.set("view engine","ejs");
var counter = 0;
app.get("/",function (req,res) {
    // res.sendFile(__dirname+"/views/ass13.html");
    let title = "Dự báo thời tiết";
    counter++;
    res.render("ass13",{
        title: title,
        counter: counter
    });
});

app.get("/login",function (req,res) {
    let obj = {
        name:"Le van A",
        age: 18
    }
    res.send(obj);
});
const fs = require("fs");
app.get("/danh-muc",function (req,res) {
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    res.render("lab10",{
        cats:cats
    });
});
