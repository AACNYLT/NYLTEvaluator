const mongoose = require('mongoose');

const ScoutSchema = new mongoose.Schema({
    orgId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    isEnabled: {
        type: Boolean,
        required: true
    }
});

const Scout = mongoose.model('Scout', ScoutSchema);

module.exports = Scout;