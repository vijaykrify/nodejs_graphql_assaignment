'use strict';
module.exports = (sequelize, DataTypes) => {
  const coins = sequelize.define('coins', {
    uuid: DataTypes.STRING,
    idname: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    currency: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    price_date: DataTypes.STRING,
    price_timestamp: DataTypes.STRING,
    circulating_supply: DataTypes.NUMERIC,
    market_cap: DataTypes.NUMERIC,
    num_exchanges: DataTypes.NUMERIC,
    num_pairs: DataTypes.NUMERIC,
    num_pairs_unmapped: DataTypes.NUMERIC,
    first_candle: DataTypes.STRING,
    first_trade: DataTypes.STRING,
    first_order_book: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    rank_delta: DataTypes.INTEGER,
    high: DataTypes.NUMERIC,
    high_timestamp: DataTypes.STRING
  }, {});
  coins.associate = function(models) {
    // associations can be defined here
  };
  return coins;
};