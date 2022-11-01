const express = require('express')

const router = express.Router()

const speakersRoute = require('./speakers')
const feedbackRoute = require('./feedback')


module.exports = (params) =>{
    router.get('/',(req,res)=>{
        res.render('layout',{pageTitle:'welcome',template:'index'})
    })
    router.use('/speakers',speakersRoute(params))
    router.use('/feedback',feedbackRoute(params))
    return router
}


