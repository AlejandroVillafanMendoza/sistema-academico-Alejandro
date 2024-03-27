"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const carreras = sequelize.define(
    "carreras",
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
 
    },
    {
      timestamps: false,
      tableName: "carreras",
    }
  );

  carreras.getCarreras = async (params) => {
    
    const query = `SELECT * FROM carreras`;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  carreras.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return carreras;
};