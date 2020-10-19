const express = require('express')
const PORT = 4500
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CodeLabStudentsDB'
const MyRouter = require('./Router/router')

const app = express()

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

con.on("open", ()=>{
  console.log("I am ready to roll")
})

app.use(express.json())
app.use("/", MyRouter)

app.listen(PORT, ()=>{
  console.log("Awesome")
})