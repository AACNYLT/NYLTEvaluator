const Scout = require('../../models/Scout');
const Org = require('../../models/Org');
const crypto = require('crypto');

module.exports = {
    Query: {
        scout: (root, args) => {
            return new Promise(((resolve, reject) => {
                Scout.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        },
        scouts: (root, args) => {
            return new Promise(((resolve, reject) => {
                const query = args.team ? {team: args.team} : {};
                Scout.find(query).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    },
    Mutation: {
        createScout: (root, {orgId, firstName, lastName, team, dateOfBirth, gender, username, password, isEnabled}) => {
            password = password ? crypto.createHash('sha256').update(password).digest('hex') : null;
            const newScout = new Scout({
                orgId,
                firstName,
                lastName,
                team,
                dateOfBirth,
                gender,
                username,
                password,
                isEnabled
            });
            return new Promise(((resolve, reject) => newScout.save((err, res) => err ? reject(err) : resolve(res))));
        },

        deleteScout: (root, args) => {
            return new Promise(((resolve, reject) => {
                Scout.findOneAndDelete(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    },
    Scout: {
        org: scout => {
            return new Promise(((resolve, reject) => {
                Org.findOne({_id: scout.orgId}).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    }
};