const db=require('../models');

const Student=db.students;

// Create a student
exports.createStudent=async(req,res)=>{
    try {
        const {username,department,roll,assignedTeacher,passed,feedback}=req.body;
        const student=new Student({username,department,roll,assignedTeacher,passed,feedback});
        await student.save();
        res.status(201).json({message:"Student created!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Get all students
exports.getAllStudents=async(req,res)=>{
    try {
        const students=await Student.findAll({
            // attributes -> the fields we want to get
            attributes:[
                'id',
                'username',
                'department'
        ]});
        res.status(200).send(students);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Get a student
exports.getAStudent=async(req,res)=>{
    try {
        const {id}=req.params;
        const student=await Student.findOne({where:{id:id}});
        res.status(200).send(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Update student
exports.updateStudent=async(req,res)=>{
    try {
        const {id}=req.params;
        await Student.update(req.body,{where:{id:id}});
        res.status(200).json({message:"Student updated!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

//Delete teacher
exports.deleteStudent=async(req,res)=>{
    try {
        const {id}=req.params;
        await Student.destroy({where:{id:id}});
        res.status(200).json({message:"Student deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}