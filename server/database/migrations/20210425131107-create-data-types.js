'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('data_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.NUMERIC
      },
      price_change: {
        type: Sequelize.NUMERIC
      },
      price_change_pct: {
        type: Sequelize.NUMERIC
      },
      volume_change: {
        type: Sequelize.NUMERIC
      },
      volume_change_pct: {
        type: Sequelize.NUMERIC
      },
      market_cap_change: {
        type: Sequelize.NUMERIC
      },
      market_cap_change_pct: {
        type: Sequelize.NUMERIC
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('data_types');
  }
};