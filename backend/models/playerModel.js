const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String, // Changed from Number to String
        required: true,
    },
    iscoach: {
        type: Boolean,
        default: false
    },
    team: {
        type: String,
    },
    speed: {
        type: Number,
        enum: [1, 2, 3]
    },
    strength: {
        type: Number,
        enum: [1, 2, 3]
    },
    endurance: {
        type: Number,
        enum: [1, 2, 3]
    },
    ability: {
        type: Number,
        enum: [1, 2, 3]
    },
    techniques: {
        type: Number,
        enum: [1, 2, 3]
    },
    tactical: {
        type: Number,
        enum: [1, 2, 3]
    },
    created_date: {
        type: Date,
        default: Date.now // Updated default value
    }
});

module.exports = mongoose.model('Player', PlayerSchema);
