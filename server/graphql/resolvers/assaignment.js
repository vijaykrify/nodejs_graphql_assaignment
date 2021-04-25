const { Assaignment } = require('../../services');
const { getSample: GetSampleShema } = require('../../dto-schemas');
const Validator = require('../../utils/validator');
const { Pool,Client} =require('pg');
const pool = new Pool({
  connectionString:process.env.DATABASE_URL,
  multipleStatements: true,
});
// eslint-disable-next-line no-unused-vars
const getData = async (_, args, ctx) => {
  try {
    const data = { userId: '' };
    const { errors } = Validator.isSchemaValid({ data, schema: GetSampleShema });
    if (errors) {
      return { errors };
    }
    const result = await Assaignment.getData(args.id);
    if (result) {
      return result
    }

  } catch (error) {
    return error;
  }
};
const getDataById = async (_, args, ctx) => {
  try {
    const data = { userId: '' };
    const { errors } = Validator.isSchemaValid({ data, schema: GetSampleShema });
    if (errors) {
      return { errors };
    }
    const result = await Assaignment.getDataById(args.uuid);
    if (result) {
      return result
    }

  } catch (error) {
    return error;
  }
};
const createData = async (_, args, ctx) => {
  try {
    const data = { userId: '' };
    
    const { errors } = Validator.isSchemaValid({ data, schema: GetSampleShema });
    if (errors) {
      return { errors };
    }
    const result = await Assaignment.createData(args.id);
    if (result) {
      return result
    }

  } catch (error) {
    return error;
  }
};


module.exports = {
  Query: {
    getData,
    getDataById
  },
  Mutation:{
    createData,
  }
};