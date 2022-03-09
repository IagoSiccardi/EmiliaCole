const express = require('express')
const app = express()
const port = 3030
const path = require('path')

app.use(express.static('public'))


app.get('/',(req, res) =>{

   return res.sendFile(path.resolve(__dirname,'views', 'index.html'))
})


app.get('/about',(req, res) =>{

    return res.sendFile(path.resolve(__dirname,'views', 'about.html'))
 })

app.get('/contact',(req, res) =>{

   return res.sendFile(path.resolve(__dirname,'views', 'contact.html'))
})

app.get('/contact',(req, res) =>{

   return res.sendFile(path.resolve(__dirname,'views', 'music.html'))
})


 app.get('*',(req, res) =>{

    return res.sendFile(path.resolve(__dirname,'views', 'notFound.html'))
 })
 
 

app.listen(port, () => console.log(`El servidor esta corriendo en el http://localhost:${port}`))