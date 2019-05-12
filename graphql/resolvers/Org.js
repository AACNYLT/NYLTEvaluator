const Org = require('../../models/Org');
const Scout = require('../../models/Scout');

module.exports = {
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
        createOrg: (root, {name}) => {
            const newOrg = new Org({
                name
            });
            return new Promise(((resolve, reject) => newOrg.save((err, res) => err ? reject(err) : resolve(res))));
        },

        deleteOrg: (root, args) => {
            return new Promise(((resolve, reject) => {
                Org.findOneAndDelete({_id: args._id}).exec((err, res) => {
                    if (err) reject(err); else {
                        if (args.deleteMembers) {
                            Scout.deleteMany({orgId: args._id}).exec(err => {
                                err ? reject(err) : resolve(res);
                            });
                        } else {
                            resolve(res);
                        }
                    }

                });
            }));
        }
    },
    Org: {
        scouts: org => {
            return new Promise(((resolve, reject) => {
                Scout.find({orgId: org._id}).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    }
};