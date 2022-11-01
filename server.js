const express =require('express')

const path =require('path')

const FeedbackService = require('./')

const app =express();
const routes = require('./routes')

const port = 3000;

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./static')))

app.use('/',routes())

app.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'))
})
 
app.listen(port,()=>{
    console.log(`Server running on port  ${port}`)
})