"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const leccion = sequelize.define(
    "leccion",
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
      tableName: "carreras", // Aquí podría ser 'leccion' si cambias el nombre de la tabla
    }
  );

  leccion.getLecciones = async (params) => {
    
    const query = `SELECT * FROM leccion`; // Aquí se cambia de carreras a leccion
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  leccion.associate = function (models) {
    // Aquí puedes agregar asociaciones si son necesarias
  };

  return leccion;
}; 
