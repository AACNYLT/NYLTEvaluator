const Utils = require('../../utils');

module.exports = (Org, Scout, Umbrella) => {
    return {
        Query: {
            org: (root, args) => {
                return new Promise(((resolve, reject) => {
                    Org.findOne(args).exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
                }));
            },
            orgs: () => {
                return new Promise(((resolve, reject) => {
                    Org.find({}).populate().exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
                }));
            }
        },
        Mutation: {
            createOrg: (root, {name, umbrellaId}) => {
                const newOrg = new Org({
                    name,
                    umbrellaId
                });
                return new Promise(((resolve, reject) => newOrg.save((err, res) => err ? reject(err) : resolve(res))));
            },

            deleteOrg: (root, args) => {
                return Utils.deleteOrgAndMembers(args._id, args.deleteMembers);
            }
        },
        Org: {
            scouts: org => {
                return new Promise(((resolve, reject) => {
                    Scout.find({orgId: org._id}).exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
                }));
            },
            umbrella: org => {
                return new Promise(((resolve, reject) => {
                    Umbrella.findOne({_id: org.umbrellaId}).exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
                }));
            }
        }
    };
};