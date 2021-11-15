var express = require('express');
var app = express();
require('dotenv').config()

// load mongose and auth plugins
var mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useNewUrlParser: true });

var { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/mergedschema');

app.use(
  '/graphql',
  graphqlHTTP(async (request, response, graphQLParams) => {
    return {
      schema: schema,
      graphiql: true,
      context: {
        req: request,
      },
    };
  })
);

module.exports = app;
