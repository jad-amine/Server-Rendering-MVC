const express = require('express');    // return a function

// create an express app
const app = express();

// return a server that automatically use local host
app.listen(3000);

// method to respond to GET request
app.get('/', (req,res) => {
    //res.send('<p>Home Page</p>');  automatically knows the "Content-Type" & response Status Code  
    res.sendFile('./HTML files/index.html', {root: __dirname}); //.sendFile method need the relative path from
});                                                       //the root folder (so we get it with __dirname)

app.get('/about', (req,res) => {
    res.sendFile('./HTML files/about.html', {root: __dirname});  // res.sendFile end the process
    console.log(__dirname);
});

// redirects
app.get('/about-us', (req,res) => {  // method that force the browser to resend a new
    res.redirect('/about');          // request to the new location & set status code
});

//404 page
// use method will fire for requests that reaches this far without being matched before
app.use((req,res) => {      // create middleware and fire function
    res.status(404).sendFile('./HTML files/404.html',{root: __dirname});
    // res.status() return a response object that can be chained
}) 