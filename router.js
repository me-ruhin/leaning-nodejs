const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('hello Nodejs')
})

module.exports = router