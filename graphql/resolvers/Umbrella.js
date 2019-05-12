const Org = require('../../models/Org');
const Umbrella = require('../../models/Umbrella');
const Utils = require('../../utils');

module.exports = {
    Query: {
        umbrella: (root, args) => {
            return new Promise(((resolve, reject) => {
                Umbrella.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        },
        umbrellas: () => {
            return new Promise(((resolve, reject) => {
                Umbrella.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    },
    Mutation: {
        createUmbrella: (root, {name}) => {
            const newUmbrella = new Umbrella({
                name
            });
            return new Promise(((resolve, reject) => newUmbrella.save((err, res) => err ? reject(err) : resolve(res))));
        },

        deleteUmbrella: (root, args) => {
            return new Promise(((resolve, reject) => {
                Umbrella.findOneAndDelete({_id: args._id}).exec((err, res) => {
                    if (err) reject(err); else {
                        if (args.deleteMembers) {
                            Org.find({umbrellaId: args._id}).exec((orgErr, orgRes) => {
                                if (orgErr) reject(orgErr); else {
                                    const promiseArray = orgRes.map(org => Utils.deleteOrgAndMembers(org._id, true));
                                    Promise.all(promiseArray).then(() => {
                                        resolve(res);
                                    }).catch(orgDeleteErr => {
                                        reject(orgDeleteErr);
                                    });
                                }
                            });
                        } else {
                            resolve(res);
                        }
                    }

                });
            }));
        }
    },
    Umbrella: {
        orgs: umbrella => {
            return new Promise(((resolve, reject) => {
                Org.find({umbrellaId: umbrella._id}).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    }
};