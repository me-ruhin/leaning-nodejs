const Router = require('express').Router()
const {getAllPost,getSinglePost} = require('./postController')

/*Custome Middleware*/
   function customMiddleware(req,res,next){
       console.log('Hello world'+req.url)
       next()
   }

/*Custom middleware End*/
Router.get('/',customMiddleware,getAllPost)

Router.get('/show/:postId',getSinglePost)

module.exports = Router