const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine',hbs);

//custom middleware for logger 
app.use((req, res, next)=>{
    var now = new Date().toString();
var log = `${now}: ${req.method} ${req.url}`;

fs.appendFile('server.log', log+'\n', (err)=>{
    if(err){
        console.log('Unable to append to server.log');
    }});
  next();
});

//maintenqance middleware
// app.use((req, res, next)=>{
//     res.render('maintanence.hbs');
//     next();
// });

//middleware ofr setting static directory
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',() =>{
    return new Date().getFullYear()
});



//http route handler
app.get('/',(req,res)=>{
   // res.send('<h1>Hello Express!</h1>');
   res.render('index.hbs',{
        pageTitle: 'Home Page'
         });

});

//about page route
app.get('/about',(req,res) =>{
    res.render('about.hbs',{
        pageTitle:'About Page',
       message:'This server is being developed by Sachin Chand.'
    });
})

//route handler ofr json error page 
app.get('/bad',(req,res)=>{
    res.send({
        errorMsg: 'unable to handle request'
    })
});


app.listen(3000,()=>{
    console.log('server is runnign at 3000');
});

