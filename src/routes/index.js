"use strict";
const express = require("express");
const api = express.Router();
const nodemailer = require("nodemailer");
const config = require("../config");

api.get("/", (req, res) => {
  res.status(200).render("index");
});
api.get("/reparacion-de-moviles", (req, res)=>{
  res.status(200).render('moviles')
})
api.get("/reparacion-de-tablets", (req, res)=>{
  res.status(200).render('tablet')
})
api.get("/reparacion-de-portatiles-y-pc", (req, res)=>{
  res.status(200).render('pc')
})
api.get("/aviso-legal", (req, res) => {
  res.status(200).render("legalWarning");
});
api.get("/cookies-policy", (req, res) => {
  res.status(200).render("cookiesPolicy");
});
api.get("/privacy-policy", (req, res) => {
  res.status(200).render("privacyPolicy");
});

api.post("/api/mail", (req, res) => {
  let body = req.body;
  console.log(body)
  let msg = `nombre: ${body.name}, email: ${body.email}, text: ${body.text} `;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let user = "send-email@umibu.io";
    let pass = "9S2WT1v!d^"; 
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ionos.es",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: user, // generated ethereal user
        pass: pass, // generated ethereal password
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"‼️🔰Formulario Web" <send-email@umibu.io>', // sender address
      to: "phontecnico@gmail.com", // list of receivers
      subject: body.subject, // Subject line
      text: msg, // plain text body,
	html:` <!DOCTYPE html>
  <html lang="es">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
          body {
              font-family: 'Helvetica', 'Arial', sans-serif;
              padding: 40px;
              background-color: #f7f9fc;
              color: #333;
          }
  
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px 40px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          }
  
          .header {
              font-size: 24px;
              margin-bottom: 30px;
              color: #2c3e50;
          }
  
          .body-content {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 30px;
          }
  
          .footer {
              font-size: 14px;
              color: #7f8c8d;
              text-align: center;
              margin-top: 20px;
              border-top: 1px solid #ecf0f1;
              padding-top: 20px;
          }
  
          .shadow-wrapper {
              background-color: #e6e6e6;
              /* Color de "sombra" */
              padding: 5px;
              /* Espacio para la "sombra" */
              max-width: 610px;
              /* Ancho máximo del contenedor + padding */
              margin: 0 auto;
              border-radius: 8px;
          }
  
          .container {
              max-width: 600px;
              background-color: #ffffff;
              padding: 20px 40px;
              border-radius: 8px;
              margin: 0 auto;
              /* Resto del CSS del contenedor */
          }
  
          .detail {
              font-size: 16px;
              margin-bottom: 15px;
          }
  
          .label {
              display: block;
              font-weight: bold;
              color: #2c3e50;
              margin-bottom: 5px;
          }
  
          .footer a {
              color: #7f8c8d;
              font-weight: bold;
          }
      </style>
  </head>
  
  <body>
      <div class="shadow-wrapper">
          <div class="container">
              <div class="header">
                  Solicitud
              </div>
              <div class="body-content">
                  <p> Estan solicitando información desde la página web, estos son los datos:
                  </p>
                  <div class="detail">
                      <span class="label">Nombre:</span>
                      <span class="value">${body.name}</span>
                  </div>
                  <div class="detail">
                      <span class="label">Número de móvil:</span>
                      <span class="value">${body.email}</span>
                  </div>
                  <div class="detail">
                      <span class="label">Mensaje:</span>
                      <span class="value">${body.text}</span>
                  </div>
              </div>
              <div class="footer">
                  Servicio ofrecido por <a href="https://umibu.io">Umibu</a>
              </div>
          </div>
      </div>
  </body>
  
  </html>`
    });
	console.log(info)
    res.status(200).send("okey");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
  main().catch(
	(err)=>{

	  console.error("err", err)
	res.status(400).send("error")
	});
});

module.exports = api;
