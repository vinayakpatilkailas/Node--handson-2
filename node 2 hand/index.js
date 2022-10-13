const express = require('express')

const App = express();
App.get('/',(req,resp)=>{
 resp.send('this is Home page');
 console.log(req);
})

App.get('/About',(req,resp)=>{
    resp.send('this is About page');
    console.log(req);
   })



App.listen('5000',function() {
    console.log('Hi everyone ');
})
