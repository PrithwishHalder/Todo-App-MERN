const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:[true, 'Task is required'],
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task',TaskSchema);