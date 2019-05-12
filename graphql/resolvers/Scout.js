const Scout = require('../../models/Scout');
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
        scouts: () => {
            return new Promise(((resolve, reject) => {
                Scout.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            }));
        }
    },
    Mutation: {
        createScout: (root, {orgId, firstName, lastName, dateOfBirth, gender, username, password, isEnabled}) => {
            password = password ? crypto.createHash('sha256').update(password).digest('hex') : null;
            const newScout = new Scout({
                orgId,
                firstName,
                lastName,
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
    }
};