const mongoose = require('mongoose');

const OrgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Org = mongoose.model('Org', OrgSchema);

module.exports = Org;