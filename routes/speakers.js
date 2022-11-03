const express = require('express')

const router = express.Router()



module.exports = (params)=>{
    const {speakerService} = params
    router.get('/',async (req,res,next)=>{
        try{
            const speakers = await speakerService.getList()
            const artwork = await speakerService.getAllArtwork()
            res.render('layout',{pageTitle:'speakers',template:'speakers',speakers,artwork})

        }catch(err){
            return next(err)
        }
        
    })
    router.get('/:shortname',async(req,res,next)=>{
        try{
            const speaker = await speakerService.getSpeaker(req.params.shortname)
        const artwork = await speakerService.getAllArtwork()
        return res.render('layout',
        {pageTitle:'speakers',
        template:'speakers-detail',
        speaker,
        artwork})

        }catch(err){
            return next(err)
        }
        
        
    })
    
    return router
}
