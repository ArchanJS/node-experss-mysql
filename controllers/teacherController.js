const db=require('../models');

const Teacher=db.teachers;

// Create a teacher
exports.createTeacher=async(req,res)=>{
    try {
        const {username,specialization,description}=req.body;
        const teacher=new Teacher({username,specialization,description});
        await teacher.save();
        res.status(201).json({message:'Teacher created!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Get all teachers
exports.getAllTeachers=async(req,res)=>{
    try {
        const teachers=await Teacher.findAll({
            // attributes -> the fields we want to get
            attributes:[
                'id',
                'username',
                'specialization'
        ]});
        res.status(200).send(teachers);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Get a teacher
exports.getATeacher=async(req,res)=>{
    try {
        const {id}=req.params;
        const teacher=await Teacher.findOne({where:{id:id}});
        res.status(200).send(teacher);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Update teacher
exports.updateTeacher=async(req,res)=>{
    try {
        const {id}=req.params;
        await Teacher.update(req.body,{where:{id:id}});
        res.status(200).json({message:"Teacher updated!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

//Delete teacher
exports.deleteTeacher=async(req,res)=>{
    try {
        const {id}=req.params;
        await Teacher.destroy({where:{id:id}});
        res.status(200).json({message:"Teacher deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}