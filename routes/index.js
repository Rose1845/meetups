const express = require('express')

const router = express.Router()

const speakersRoute = require('./speakers')
const feedbackRoute = require('./feedback')


module.exports = (params) =>{
    const {speakerService} = params

    router.get('/',async(req,res)=>{
        const topSpeakers = await speakerService.getList()
        res.render('layout',{pageTitle:'welcome',template:'index',topSpeakers})
    })
    router.use('/speakers',speakersRoute(params))
    router.use('/feedback',feedbackRoute(params))
    return router
}


