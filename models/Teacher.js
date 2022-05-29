const {DataTypes}=require('sequelize');

/**
 * 
 * @param {DataTypes} DataTypes 
 */
module.exports=(sequelize,DataTypes)=>{
    const Teacher=sequelize.define("teacher",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        specialization:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT
        }
    })
    return Teacher;
}