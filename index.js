const express = require('express')

const PORT = process.env.PORT || 8080
const app = express();
const {herramientaFechas}= require('./utils/herramientaFechas')
const noEncuntrado = 404


//! rutas 
//require = req --- response= res
app.get("/",(req, res)=>{
    res.send(`biemvenido a la pagina, son las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`)
})
app.get("/carrito",(req,res)=>{
    res.send('<h1>carrito</h1>')
})
app.get("/productos",(req,res)=>{
    res.send('<h1>productos</h1>')
})
app.get("/secret",(req,res)=>{
    res.send('<h1>te dejo un genial y fabuloso 404.    Denada bebe</h1>')
})
app.get("*",(req,res)=>{
    res.status(noEncuntrado).send(`${noEncuntrado} pagina no existe`)
})



//! listen

const connectedServer = app.listen(PORT,()=>{
    console.log(`servidor activo en ${PORT}`)
    console.log(`se conecto un usuario al puerto ${PORT} a las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`)
})

connectedServer.on('error',(error)=>{
    console.log(error.message)
})