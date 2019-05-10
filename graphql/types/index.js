const mergeTypes = require('merge-graphql-schemas').mergeTypes;
const Scout = require('./Scout');

const typeDefs = [Scout];

module.exports = mergeTypes(typeDefs, {all: true});