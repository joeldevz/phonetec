'use strict'
const config = require('./config')
const app = require('./app')
const serverless = require('serverless-http');
/* app.listen(config.port, ()=>{
    console.log("start server http://localhost:"+config.port)
}) */
module.exports.handler = serverless(app);