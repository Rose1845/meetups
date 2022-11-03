const express =require('express')

const path =require('path')
const createError = require('http-errors')

const FeedbackService = require('./services/FeedbackService')

const SpeakerService = require('./services/SpeakerService')

const feedbackService = new FeedbackService('data/feedback.json')

const speakerService = new SpeakerService('data/speakers.json')

const app =express();

const routes = require('./routes')

const port = 5000;

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'./views'))

app.locals.siteName = 'Eucossa MeetUps'

app.use(express.static(path.join(__dirname,'./static')))

app.use(async(req,res,next)=>{
    try{
        const names = await speakerService.getNames()
         res.locals.speakerNames = names
         return next()

    }catch (err){
        return next(err)
    }
    
   
})



app.use('/',routes({
    feedbackService,
    speakerService
}))

app.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'))
})

app.use((req,res,next)=>{
    return next(createError(404,'File not found'))

})
 
app.listen(port,()=>{
    console.log(`Server running on port  ${port}`)
})
