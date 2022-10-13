const express = require('express')

const PORT = process.env.PORT || 8080
const app = express();
const {herramientaFechas}= require('./utils/herramientaFechas')



//! listen

const connectedServer = app.listen(PORT,()=>{
    console.log(`servidor activo en ${PORT}`)
    console.log(`se conecto un usuario al puerto ${PORT} a las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`)
})


connectedServer.on('error',(error)=>{
    console.log(error.message)
})