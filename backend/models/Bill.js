const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    billId: { type: String, required: true, unique: true },
    patientName: { type: String, required: true },
    billDate: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    discount: { type: Number, required: true },
    finalAmount: { type: Number, required: true },
    labDetails: [{
        labId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lab', required: true },
        labName: { type: String, required: true },
        subtotal: { type: Number, required: true },
        tests: [{
            testId: { type: String, required: true },
            testName: { type: String, required: true },
            price: { type: Number, required: true }
        }]
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bill', billSchema);
