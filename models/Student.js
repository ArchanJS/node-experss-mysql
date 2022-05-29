const {DataTypes}=require('sequelize');
const Teacher=require('./Teacher');

/**
 * 
 * @param {DataTypes} DataTypes 
 */
module.exports=(sequelize,DataTypes)=>{
    const Student=sequelize.define("student",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        department:{
            type:DataTypes.STRING,
            allowNull:false
        },
        roll:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        assignedTeacher:{
            type:DataTypes.INTEGER,
            references:{
                model:'teachers',
                key:'id'
            }
        },
        passed:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        feedback:{
            type:DataTypes.TEXT
        }
    })
    return Student;
}