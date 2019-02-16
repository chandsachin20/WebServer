const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine',hbs);

//middleware ofr setting static directory
app.use(express.static(__dirname + '/public'));

//http route handler
app.get('/',(req,res)=>{
   // res.send('<h1>Hello Express!</h1>');
   /* res.send({
        name:'Sachin',
        like: [
            'biking',
            'coding'
        ]
    })*/
    res.render('index.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear() 
    });

});

//about page route
app.get('/about',(req,res) =>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear:new Date().getFullYear(),
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
