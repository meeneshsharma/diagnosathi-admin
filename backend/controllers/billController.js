const Bill = require('../models/Bill');

// Function to save a new bill
exports.createBill = async (req, res) => {
    try {
        const newBill = new Bill(req.body);
        const savedBill = await newBill.save();
        res.status(201).json(savedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to get all bills
exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find().sort({ createdAt: -1 });
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteBill = async (req, res) => {
    try {
        const billId = req.params.id;
        const deletedBill = await Bill.findByIdAndDelete(billId);

        if (!deletedBill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json({ message: 'Bill deleted successfully', deletedBill });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Function to delete multiple bills
exports.deleteMultipleBills = async (req, res) => {
    try {
        const { ids } = req.body; // Expecting an array of bill IDs

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: 'No bill IDs provided' });
        }

        const result = await Bill.deleteMany({ _id: { $in: ids } });

        res.status(200).json({
            message: `${result.deletedCount} bill(s) deleted successfully`,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

