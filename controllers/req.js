const express = require("express");
const  Character  = require("../models/charModel");
const router = express.Router();
//Get All game characters
const getAll = async  (req, res) => {
    try {
        const characters = await Character.find()
        if(characters.length > 1000){
        const page = parseInt(req.query.page);
        const limit = req.query.limit

        const startIndex = (page -1)*limit
        const endIndex = page * limit
        const results ={}
        if(startIndex > 0 ){
        results.previous = {
            page:page - 1,
            limit:limit
        }}
        results.results = characters.slice(startIndex, endIndex)
        

                if(endIndex < characters.length){
        results.next = {
            page:page + 1,
            limit:limit
        }}


        res.status(200).json(results); 
    }else{
        if(characters.length===0){
            return res.status(404).json({message:"Character Not Found."})
        }    
        res.status(200).json(characters); 
    }
        
    } catch (err) {
        res.status(500).json({ message: err.message })
}};
//Get character by his ID
const getById = async (req,res)=>{
        const id = req.params.id;
    try {
        const character = await Character.findById(id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (err) { 
        res.status(500).json({ message: err.message });
    }
    };
//Get character by his name 
const getByName = async (req,res)=>{
        const name = req.params.body.name;
    try {
        const character = await Character.findOne({name});
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (err) { 
        res.status(500).json({ message: err.message });
    }
    };
//Create new Character
const create = async (req,res)=>{
        try{
            const newChar = new Character(req.body);

            const savedChar = await newChar.save();
            res.status(201).json(savedChar);
        }catch(err){
            res.status(400).json({message:err.message});
        }
    };

//Update Character
const update = async(req,res)=>{
    try{
        const {id} = req.params;
        const char = await Character.findByIdAndUpdate(id, req.body);
        if(!char){
            return res.status(404).send({message:"Chracter not found!"});
        }
        const updatedChar = await Character.findById(id);
        res.status(200).json(updatedChar);
        
    }
    catch(err){
        res.status(500).json({message:console.error.message});
    }
}
//Delete Character
const Delete = async(req,res)=>{
    try{
        const {id}=req.params;

     
        const char = await Character.findByIdAndDelete(id);
        if(!char){
            return res.status(404).json({message:"Character not found!"});
        }
        res.status(200).json({message:"Character Deleted."});
        
    }
    catch(err){
        res.status(500).json({message:console.error.message});
    }
}
exports.router = router;
exports.getAll = getAll;
exports.getById = getById;
exports.getByName = getByName;
exports.create = create;
exports.update = update;
exports.Delete = Delete;
