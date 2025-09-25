const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    title:String,
    description:String,
    userId:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const TaskModel=mongoose.model('Task',taskSchema);
module.exports=TaskModel;