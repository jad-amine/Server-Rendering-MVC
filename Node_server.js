const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {   // cb fct that fires at every request received
    console.log('request made');                 // the code is running in the server not the browser
    console.log(req.url, req.method);        //so we will see it in the backend not the browser console

    // lodash
    const num = _.random(0, 20);
    console.log(num);
    // method that allow a function to only run once
    const greet = _.once( () => {
        console.log('hello');
    });
    greet();
    greet();

    // set header content type
    //res.setHeader('Content-Type', 'text/plain'); to send text back
    res.setHeader('Content-Type', 'text/html');  // to send html back

    // Routing (add pages other than localhost:3000/)
    let path = './HTML files/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode =200;       // set response status code to be returned to 
            break;                     // the browser
        case '/about':
            path += 'about.html';
            res.statusCode =200;
            break;
        // Redirect
        case '/about-me':               // if I have changed the location of some resource
            res.statusCode = 301;       // we redirect the user to the new location
            res.setHeader('Location', '/about');
            res.end();            
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // send an html file back
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else{
            res.write(data);
            res.end();
            // res.end(data) can be used instead of 2 lines if we send only one file back
        }
    });
});                                             

server.listen(3000, 'localhost', ()=>{   // the host is our pc (local host) and listening to port 3000
    console.log('listening for requests on port 3000');
});                                     // local host is a domain name on the web == (127.0.0.1)


// to access this server from the browser we navigate to "url = localhost:3000" but nothing will happen
// only a console.log in the backend terminal 