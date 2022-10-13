const express = require('express')
const http = require('http')
const app = express
const PORT = process.env.PORT || 8080
const {herramientaFechas}= require('./utils/herramientaFechas')




//! createServer
const server = http.createServer((request,response)=>{
    response.write(herramientaFechas.hora)
    response.write(herramientaFechas.fecha)
    response.end()   

})

//! listen

const connectedServer = server.listen(PORT,()=>{
    console.log(`servidor activo en ${PORT}`)
})