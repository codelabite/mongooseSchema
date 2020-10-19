const express = require('express')
const mongoose = require('mongoose')

const CodeLabSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: "Peter"
  },
  interest: {
    type: String,
    require: true,
    default: "Mobile Development"
  },

  age: {
    type: Number,
    require: true,
   
  }

})

module.exports = mongoose.model("DBSchema", CodeLabSchema)