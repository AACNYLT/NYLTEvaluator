const mergeResolvers = require('merge-graphql-schemas').mergeResolvers;
const Scout = require('./Scout');
const Org = require('./Org');
const Umbrella = require('./Umbrella');

const resolvers = [Scout, Org, Umbrella];

module.exports = mergeResolvers(resolvers);