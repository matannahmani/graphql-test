
const { schemaComposer } = require('graphql-compose');
const { doorbellMutation, doorbellQuery } = require('./schema');
const { userQuery, userMutation } = require('./userschema');
const schema = schemaComposer;

schema.Query.addFields({
    ...userQuery,
    ...doorbellQuery
})

schema.Mutation.addFields({
    ...userMutation,
    ...doorbellMutation
})



module.exports = schema.buildSchema();;