const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(morgan('dev'));

const port=process.env.PORT || 8000;

app.use('/teacher',require('./routes/teacherRoutes'));
app.use('/student',require('./routes/studentRoutes'));

app.listen(port,()=>{
    console.log("Server is running!");
})