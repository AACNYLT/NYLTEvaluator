const mongoose = require('mongoose');

const UmbrellaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Umbrella = mongoose.model('Umbrella', UmbrellaSchema);

module.exports = Umbrella;