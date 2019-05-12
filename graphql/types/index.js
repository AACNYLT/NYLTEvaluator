const mergeTypes = require('merge-graphql-schemas').mergeTypes;
const Scout = require('./Scout');
const Org = require('./Org');
const Umbrella = require('./Umbrella');

const typeDefs = [Scout, Org, Umbrella];

module.exports = mergeTypes(typeDefs, {all: true});