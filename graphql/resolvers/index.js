const mergeResolvers = require('merge-graphql-schemas').mergeResolvers;
const Scout = require('./Scout');
const Org = require('./Org')(require('../../models/Org'), require('../../models/Scout'), require('../../models/Umbrella'));
const Umbrella = require('./Umbrella');

const resolvers = [Scout, Org, Umbrella];

module.exports = mergeResolvers(resolvers);