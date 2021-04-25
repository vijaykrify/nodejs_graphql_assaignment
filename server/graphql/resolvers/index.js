const Sample = require('./sample');
const Assaignment=require('./assaignment')

module.exports = {
  Query: {
    ...Sample.Query,
    ...Assaignment.Query
  },
  Mutation:{
    ...Assaignment.Mutation
  }
};
