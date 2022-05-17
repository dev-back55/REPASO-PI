const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validatte: {
        notEmpty: true
      }
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
      validatte: {
        notEmpty: true
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validatte: {
        notEmpty: true
      }
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false,
      validatte: {
        notEmpty: true
      }
    } 

  });
};
