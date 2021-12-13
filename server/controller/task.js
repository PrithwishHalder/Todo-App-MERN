const Task = require('../models/task');

const getAllTask = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch(err){
        res.status(500).json({err});
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch(err){
        res.status(400).json({err});
    }
}

const getTask = async (req, res) => {
    try{
        const task = await Task.findOne({_id: req.params.id});
        if(!task){
            return res.status(404).json({err: `No task with ${req.params.id}`});
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({err});
    }
}

const updateTask = async (req, res) => {
    try {
        const task= await Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
        console.log(req.body);
        if(!task){
            return res.status(404).json({err: `No task with ${req.params.id}`});
        }

        res.status(200).json({task});
    }catch(err){
        res.status(500).json({err});
    }
}

const completeTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({_id: req.params.id}, {completed: true}, {new: true, runValidators: true});
        // const task= await Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
        console.log(req.body);
        if(!task){
            return res.status(404).json({err: `No task with ${req.params.id}`});
        }

        res.status(200).json({task});
    }catch(err){
        res.status(500).json({err});
    }
}

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findOneAndDelete({_id: req.params.id});
        if(!task){
            return res.status(404).json({err: `No task with ${req.params.id}`});
        }
        res.status(200).json({task});
        // res.status(200).send()
    }catch(err){
        res.status(500).json({err});
    }
}

module.exports = {getAllTask, createTask, getTask, updateTask, deleteTask, completeTask};