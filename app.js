// npm init (for package.json file)

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.grbe0.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)                     // async function return a promise after connecting
    .then((result) => {
        app.listen(3000);                   // we want our app to start listening to requests only after
        console.log('Connected to MongoDB');     // after connecting to the db
    })                                      
    .catch((err) => console.log(err));

// npm install ejs
// register view engine (that handels templates/ejs files dynamically)
app.set('view engine', 'ejs'); // express will automatically check in the views folder
// app.set('views', 'folder') if we want express to look in another folders for views

// middleware (from express) to use with static  files 
app.use(express.static('public'));   // make 'public' folder available for the front end

// parse incoming data from Form (post requests) into a usable object in the request 
app.use(express.urlencoded( {extended: true}));

// better method to log details to the console from 3rd party packages
app.use(morgan('dev'));       // 'dev' is the style of giving info back

// usual method
/*app.use((req,res, next) => {                  
    console.log('-> New request was made:');   
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
*/

// mongoose and mongo sandbox routes (adding dummy data)
/*
app.get('/add-blog',(req,res) => {           // creating a blog model instance
    const blog = new Blog({                 //  when reaching this url
        title: 'new blog 2',
        snippet: 'more blog',
        body: 'even more blog'
    });

    blog.save()                       // method available on model instances & return
        .then((result) => {          // a promise that resolve to the doc saved in the db
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
*/

/*
app.use((req,res,next) => {         // next is a function to tell express to move to next middleware
    console.log('in the next piece of middleware');  
    next();
})
*/

// routes
app.get('/', (req,res) => {
    res.redirect('/blogs');
});                      

app.get('/about',(req,res) => {
    res.render('about', {title:'About'});  
});

// blog routes using router
app.use('/blogs', blogRoutes);  // 1st argument to scope the middleware only to '/blogs' routes

// 404 page
app.use((req,res) => {
    res.status(404).render('404', {title:'404'});
});