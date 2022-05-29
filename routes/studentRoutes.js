const router=require('express').Router();
const {createStudent,getAllStudents,getAStudent,updateStudent,deleteStudent}=require('../controllers/studentController');

router.post('/create',createStudent);
router.get('/get',getAllStudents);
router.get('/get/:id',getAStudent);
router.put('/update/:id',updateStudent);
router.delete('/delete/:id',deleteStudent);

module.exports=router;