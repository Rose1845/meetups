const express = require('express')

const router = express.Router()


module.exports = ()=>{
    router.get('/',(req,res)=>{
        return res.send('Feedback page')
    })
    router.post('/feedback',(req,res)=>{
        return res.send('feedback form posted')
    })
    
    return router
}