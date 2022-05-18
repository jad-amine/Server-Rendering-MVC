// EXPRESS ROUTER

const express = require('express');
const blogController =require('../controllers/blogController');

const router = express.Router();   //mini app that replace the app in the routes

//blog routes
router.get('/', blogController.blog_index);    // since we are in the scope we only put '/'

//should be placed first so express don't consider "/create" as a variable ":id"
router.get('/create', blogController.blog_create_get);

//[render specific blogs] (/:id is a variable parameter) that helps
router.get('/:id', blogController.blog_details);

router.post('/', blogController.blog_create_post);

router.delete('/:id', blogController.blog_delete)      // this is an AJAX request from the front-end
                                                    // so we can't redirect from the server


module.exports = router;    // make it available to app.js
