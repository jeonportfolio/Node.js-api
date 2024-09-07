const Task = require("../models/Task")

const taskContoller = {};

taskContoller.createTask=async(req,res)=>{
     try{
        const {task,isComplete} = req.body;
        const newTask = new Task({task,isComplete});
        await newTask.save();
        return res.status(200).json({status:"ok",data:newTask});
     }catch(error){
        res.status(400).json({status:"fail", error});
     }
};

taskContoller.getTasks = async(req,res) => {   
            try{  
               const tasks = await Task.find();
               return res.status(200).json({ status: "ok", data: tasks})
            }catch(error){
                  res.status(400).json({ status:"fail", error});
            }
}

 

module.exports= taskContoller