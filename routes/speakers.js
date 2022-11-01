const express = require('express')

const router = express.Router()



module.exports = ()=>{
    router.get('/',(req,res)=>{
        return res.send('speakers list')
    })
    router.get('/:shortname',(req,res)=>{
        return res.send(`details page of ${request.params.shortname}`)
    })
    
    return router
}
