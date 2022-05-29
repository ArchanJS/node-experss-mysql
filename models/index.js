const dbConfig=require('../db/connConfig');

const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false
    }
)

sequelize.authenticate().then(()=>console.log("DB Connected!")).catch((err)=>console.log(err));

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.students=require('../models/Student')(sequelize,DataTypes);
db.teachers=require('../models/Teacher')(sequelize,DataTypes);

// If we make force:true, every time tables will be created when the server will run
db.sequelize.sync({force:false}).then(()=>{
    console.log("Re-sync done!");
});

module.exports=db;