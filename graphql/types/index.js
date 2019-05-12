const mergeTypes = require('merge-graphql-schemas').mergeTypes;
const Scout = require('./Scout');
const Org = require('./Org');

const typeDefs = [Scout, Org];

module.exports = mergeTypes(typeDefs, {all: true});