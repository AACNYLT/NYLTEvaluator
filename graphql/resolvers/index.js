const mergeResolvers = require('merge-graphql-schemas').mergeResolvers;
const Scout = require('./Scout');
const Org = require('./Org');

const resolvers = [Scout, Org];

module.exports = mergeResolvers(resolvers);