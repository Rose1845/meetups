const express = require('express')

const router = express.Router()


module.exports = (params)=>{
    const {feedbackService}= params
    router.get('/',async(req,res,next)=>{
        try{
           const feedback = await feedbackService.getList()
           return res.json(feedback)
           

        }catch(err){
            return next(err)
        }
       
    })

    router.post('/',(req,res)=>{
        return res.send('feedback form posted')
    })
    
    return router
}