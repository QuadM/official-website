const mongoose = require('mongoose');

// member database schema
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    committee: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    imageID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Member', memberSchema, 'crew');