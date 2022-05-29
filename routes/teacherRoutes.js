const router=require('express').Router();
const {createTeacher,getAllTeachers,getATeacher,updateTeacher,deleteTeacher}=require('../controllers/teacherController');

router.post('/create',createTeacher);
router.get('/get',getAllTeachers);
router.get('/get/:id',getATeacher);
router.put('/update/:id',updateTeacher);
router.delete('/delete/:id',deleteTeacher);

module.exports=router;