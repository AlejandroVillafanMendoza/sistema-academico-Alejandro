"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const materias = sequelize.define(
    "materias",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      semestre: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fk_profesor: {
        allowNull: false, 
        type: DataTypes.TEXT,
      },
      fk_carrera:{
        allowNull: false, 
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  materias.getMaterias = async (params) => {
    
    const query = `SELECT * FROM materias`;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  materias.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return materias;
};

