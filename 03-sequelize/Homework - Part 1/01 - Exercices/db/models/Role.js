const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Role;
};
