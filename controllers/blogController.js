// MVC (model, view, controller) convention

//(MDN) blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

// keep the control logic separate from the routes

const blog_index = (req,res) => {         
    Blog.find().sort({createdAt: -1})    // (find) method to get all blogs collection
        .then(result => {               // (sort(-1)) sort documents in descending order (most recent)  
            res.render('blogs/index', {title: 'All Blogs', blogs: result})
        })                                      
        .catch(err => {
            console.log(err);
        })
}

const blog_create_get = (req,res) => {                 
    res.render('blogs/create', {title:'Create a new Blog'});      // express automatically look in the views folder    
}

const blog_create_post = (req,res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        })    
}

const blog_details = (req,res) => {
    const id = req.params.id;              // the id value is catched here
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', {blog: result, title: result.title})
        })
        .catch(err => {
            res.status(404).render('404', {title: 'Blog not found'});
        })
}

const blog_delete = (req,res) => {
    const id = req.params.id;  

    Blog.findByIdAndDelete(id)              
        .then(result => {
            res.json({ redirect: '/blogs'})     // we send a json to the front-end so it can access
        })                                      // value and redirect itself
        .catch(err => {
            console.log(err);
        })    
}

module.exports = {
    blog_index, 
    blog_details, 
    blog_create_get, 
    blog_create_post,
    blog_delete
}