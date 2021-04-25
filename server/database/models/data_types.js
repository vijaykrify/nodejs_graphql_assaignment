'use strict';
module.exports = (sequelize, DataTypes) => {
  const data_types = sequelize.define('data_types', {
    uuid: DataTypes.STRING,
    days: DataTypes.STRING,
    volume: DataTypes.NUMERIC,
    price_change: DataTypes.NUMERIC,
    price_change_pct: DataTypes.NUMERIC,
    volume_change: DataTypes.NUMERIC,
    volume_change_pct: DataTypes.NUMERIC,
    market_cap_change: DataTypes.NUMERIC,
    market_cap_change_pct: DataTypes.NUMERIC
  }, {});
  data_types.associate = function(models) {
    // associations can be defined here
  };
  return data_types;
};