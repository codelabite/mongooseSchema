const express = require('express')
const router = express.Router()
const DBSchema = require('../schemaData/dataBaseSchema')


router.get('/', async(req, res)=>{

  try{
    const newData = await DBSchema.find()
    res.status(200).json(newData)

  }catch (error) {
      res.stats(404).send("error: " + error)
    }
  
})
router.get('/:id', async(req, res)=>{

  try{
    const newData = await DBSchema.findById(req.params.id)
    res.status(200).json(newData)

  }catch (error) {
      res.stats(404).send("error: " + error)
    }
  
})


router.post('/', async(req, res)=>{

    const createData = new DBSchema({
      name: req.body.name,
      interest: req.body.interest,
      age: req.body.age
    })
  try{
    const newData = await createData.save()
    res.status(201).json(newData)
   

  }catch (error) {
      res.stats(404).send("error: " + error)
    }
  
})


module.exports = router