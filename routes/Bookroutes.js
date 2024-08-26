const express = require('express')
const router = express.Router()
const Books = require('../models/Books')

router.post('/',async(req,res)=>{
    try{
        const {id,name,price} = req.body;
        const book = new Books({id,name,price})
        await book.save()
        res.json({message : 'Book added',book})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
router.get('/',async(req,res)=>{
    try{
        const book =  await Books.scan().exec()
        res.json({book})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const updateData = req.body;
        const book = await Books.update({id},updateData)
        res.json({message : 'Book updated',book})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        await Books.delete(id)
        res.json({message : 'Book deleted successfully'})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports = router