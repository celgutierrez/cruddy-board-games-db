'use strict';
module.exports = function(sequelize, DataTypes) {
  var game = sequelize.define('game', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return game;
};