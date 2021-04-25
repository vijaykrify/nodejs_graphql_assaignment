const { mergeTypeDefs } = require('@graphql-tools/merge');

const Scaler = require('./scaler');
const Comman = require('./comman');
const Sample = require('./sample');
const Assaignment=require('./assaignment')

const types = [
  Scaler,
  Comman,
  Sample,
  Assaignment
];

module.exports = mergeTypeDefs(types);
