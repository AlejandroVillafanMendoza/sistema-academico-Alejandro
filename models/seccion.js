"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const seccion = sequelize.define(
    "seccion",
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
      tableName: "seccion",
    }
  );

  seccion.getSecciones = async (params) => {
    
    const query = `SELECT * FROM seccion`;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  seccion.associate = function (models) {
    // Aquí puedes agregar asociaciones si son necesarias
  };

  return seccion;
}; 
