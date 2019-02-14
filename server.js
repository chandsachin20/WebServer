const express = require('express');

var app = express();

//middleware ofr setting static directory
app.use(express.static(__dirname + '/public'));

//http route handler
app.get('/',(req,res)=>{
   // res.send('<h1>Hello Express!</h1>');
    res.send({
        name:'Sachin',
        like: [
            'biking',
            'coding'
        ]
    })
});

//about page route
app.get('/about',(req,res) =>{
    res.send('<h1>About Page</h1>');
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
