const express = require('express')
const morgan = require('morgan')
const userRouter = require('./router')
const postRouter =  require('./post')
const app  = express();

app.use(morgan())
app.use('/post',postRouter)
app.use('/user',userRouter)
const PORT = process.env.PORT || 8081

app.listen(PORT,()=>{
    console.log(`server Running at ${PORT}`)
})