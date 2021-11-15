const { composeMongoose } = require('graphql-compose-mongoose');
const Doorbell = require('../models/doorbell');

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const DoorbellTC = composeMongoose(Doorbell, customizationOptions);

// STEP 3: ADD NEEDED CRUD doorbell OPERATIONS TO THE GraphQL SCHEMA
// via graphql-compose it will be much much easier, with less typing
const doorbellQuery = {
  doorbellById: DoorbellTC.mongooseResolvers.findById(),
  doorbellByIds: DoorbellTC.mongooseResolvers.findByIds(),
  doorbellOne: DoorbellTC.mongooseResolvers.findOne(),
  doorbellMany: DoorbellTC.mongooseResolvers.findMany(),
  doorbellDataLoader: DoorbellTC.mongooseResolvers.dataLoader(),
  doorbellDataLoaderMany: DoorbellTC.mongooseResolvers.dataLoaderMany(),
  doorbellByIdLean: DoorbellTC.mongooseResolvers.findById({ lean: true }),
  doorbellByIdsLean: DoorbellTC.mongooseResolvers.findByIds({ lean: true }),
  doorbellOneLean: DoorbellTC.mongooseResolvers.findOne({ lean: true }),
  doorbellManyLean: DoorbellTC.mongooseResolvers.findMany({ lean: true }),
  doorbellDataLoaderLean: DoorbellTC.mongooseResolvers.dataLoader({ lean: true }),
  doorbellDataLoaderManyLean: DoorbellTC.mongooseResolvers.dataLoaderMany({ lean: true }),
  doorbellCount: DoorbellTC.mongooseResolvers.count(),
  doorbellConnection: DoorbellTC.mongooseResolvers.connection(),
  doorbellPagination: DoorbellTC.mongooseResolvers.pagination(),
};

const doorbellMutation = {
  doorbellCreateOne: DoorbellTC.mongooseResolvers.createOne(),
  doorbellCreateMany: DoorbellTC.mongooseResolvers.createMany(),
  doorbellUpdateById: DoorbellTC.mongooseResolvers.updateById(),
  doorbellUpdateOne: DoorbellTC.mongooseResolvers.updateOne(),
  doorbellUpdateMany: DoorbellTC.mongooseResolvers.updateMany(),
  doorbellRemoveById: DoorbellTC.mongooseResolvers.removeById(),
  doorbellRemoveOne: DoorbellTC.mongooseResolvers.removeOne(),
  doorbellRemoveMany: DoorbellTC.mongooseResolvers.removeMany(),
};

module.exports = {doorbellMutation,doorbellQuery}