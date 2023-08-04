const express= require('express');
const path =require('path');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    return res.render('home');
})

const port=8000;
app.listen(port,(err)=>{
    if(err){
        console.log("server is not working ");
    }
    console.log(`server running at ${port}`);
})