const express= require("express")
const app = express();
const path = require("path");


const port = 8080;

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"/public/js")));      ek sath bahuut sara file pass kr sakte
// app.use(express.static(path.join(__dirname,"/public/css")));


app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));


app.get("/home",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs")
})


app.get("/",(req,res)=>{
    // res.send("this is home");
    res.send("i am root")
});


app.get("/rollDice",(req,res)=>{

    let diceVal = Math.floor(Math.random()*6)+1
    // res.render("rolldice.ejs",{num:diceVal})
    // res.render("rolldice.ejs",{diceVal:diceVal})
    res.render("rolldice.ejs",{diceVal})

});

/*app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    const followers = ["adam","bob","steve","abc"];
    res.render("instagram.ejs",{username,followers})

})
*/

app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data)
    res.render("instagram_json.ejs",{data});
    else
    res.render("error.ejs",);


})



app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});