const express= require('express');
const path =require('path');


const connectDB = require('./config/mongoose');
connectDB();
const Contact =require('./models/contact');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({ extended: false }));

// app.get('/',(req,res)=>{
//     return res.render('home',{title:"my contact list"});
// })

var contactList=[
    {
        name:"aman",
        phone:"11111111111"
    },
    {
        name:"badal",
        phone:"2222222222"
    },
    {
        name:"cyrus",
        phone:"33333333333"
    }
]


app.get('/pratice',(req,res)=>{
    return res.render('pratice',{title: "pratice"})
})

app.get('/',(req,res)=>{
    return res.render('home',{title: "contactname",contact_list: contactList})
})

// app.post('/add-contact',(req,res)=>{
//     // return res.redirect('/demo')
//     // console.log(req.body);
    
    
//     // const newContact = {
//     //     name: req.body.name,
//     //     phone: req.body.phone
//     // };
   

//     // contactList.push(req.body);
//       Contact.create({
//         name: req.body.name,
//         phone: req.body.phone
//       },function(err,newContact){
//         if(err){
//             console.log('error in creating')
//         }
//       })
      
//       return res.redirect('/');

//})
app.post('/add-contact', async (req, res) => {
    try {
        // Create a new contact using the Contact model
        await Contact.create(req.body);

        return res.redirect('/');
    } catch (error) {
        console.error('Error adding contact:', error.message);
        return res.status(500).send('Internal Server Error');
    }
});

//delete one from array 

app.post('/delete-contact', (req, res) => {
    const nameToDelete = req.body.name;

    // Remove the contact from the contactList array
    contactList = contactList.filter(contact => contact.name !== nameToDelete);

    return res.redirect('/');
});

//ctreating from middleware

//check


app.get('/demo',(req,res)=>{
    res.render('demo');
})


const port=8000;
app.listen(port,(err)=>{
    if(err){
        console.log("server is not working ");
    }
    console.log(`server running at ${port}`);
})
// Call the connectDB function to establish the MongoDB connection

