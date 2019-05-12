const Org = require('./models/Org');
const Scout = require('./models/Scout');

module.exports.deleteOrgAndMembers = (orgId, deleteMembers) => {
    return new Promise(((resolve, reject) => {
        Org.findOneAndDelete({_id: orgId}).exec((err, res) => {
            if (err) reject(err); else {
                if (deleteMembers) {
                    Scout.deleteMany({orgId: orgId}).exec(err => {
                        err ? reject(err) : resolve(res);
                    });
                } else {
                    resolve(res);
                }
            }

        });
    }));
};