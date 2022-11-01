const express = require('express')

const router = express.Router()



module.exports = (params)=>{
    const {speakerService} = params
    router.get('/',async (req,res)=>{
        const speakers = await speakerService.getList()
        return res.json(speakers)
    })
    router.get('/:shortname',(req,res)=>{
        return res.send(`details page of ${request.params.shortname}`)
    })
    
    return router
}
