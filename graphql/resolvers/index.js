const mergeResolvers = require('merge-graphql-schemas').mergeResolvers;
const Scout = require('./Scout');

const resolvers = [Scout];

module.exports = mergeResolvers(resolvers);