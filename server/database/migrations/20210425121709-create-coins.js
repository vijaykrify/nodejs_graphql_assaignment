'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      idname: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      logo_url: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.NUMERIC
      },
      price_date: {
        type: Sequelize.STRING
      },
      price_timestamp: {
        type: Sequelize.STRING
      },
      circulating_supply: {
        type: Sequelize.NUMERIC
      },
      market_cap: {
        type: Sequelize.NUMERIC
      },
      num_exchanges: {
        type: Sequelize.NUMERIC
      },
      num_pairs: {
        type: Sequelize.NUMERIC
      },
      num_pairs_unmapped: {
        type: Sequelize.NUMERIC
      },
      first_candle: {
        type: Sequelize.STRING
      },
      first_trade: {
        type: Sequelize.STRING
      },
      first_order_book: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.INTEGER
      },
      rank_delta: {
        type: Sequelize.INTEGER
      },
      high: {
        type: Sequelize.NUMERIC
      },
      high_timestamp: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coins');
  }
};