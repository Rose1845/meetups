const express =require('express')
const path =require('path')

const app =express();
const port = 3000;

app.use(express.static(path.join(__dirname,'./static')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/index.html'))
})
app.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'))

})

app.listen(port,()=>{
    console.log(`Server running on port  ${port}`)
})