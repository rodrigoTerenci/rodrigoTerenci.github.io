import express from 'express'
import http from 'http'
const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000

  
    app.use(express.static('.'))
    server.listen(port)
    console.log('Conecção Estabelicida com Sucesso...')

//createServer and start listening
