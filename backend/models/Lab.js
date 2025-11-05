const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    tests: [
        {
            testId: {
                type: String, // Use a string to match the frontend logic
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;
