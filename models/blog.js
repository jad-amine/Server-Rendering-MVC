const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Constructor function to create schemas

// const blogSchema = new mongoose.Schema({title: 'string', ...})
// or
// we create a schema instance 
const blogSchema = new Schema({                // specify the structure of our documents
    title: {
        type: String,
        required: true
    },
    snippet: {                // mongoose creating a schema for us allowing to specify
        type: String,       // what type of data each property should be and if it is required
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});         // optional added elements (record time)


// create a model arround the schema
const Blog = mongoose.model('Blog', blogSchema); // first argument is the name of the model
                                                 //must be the singular of the collecion
                                                // name and the second argument is the 
                                                // schema to wrap arround
//Mongoose automatically looks for the plural, lowercased version of your model name in db 

// make the model usable outside this script
module.exports = Blog;    
            