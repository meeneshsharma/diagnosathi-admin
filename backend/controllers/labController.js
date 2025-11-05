const Lab = require('../models/Lab');

// Get all labs
const getLabs = async (req, res) => {
    try {
        const labs = await Lab.find();
        res.json(labs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new lab
const addLab = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Lab name is required.' });
    }
    const newLab = new Lab({ name });
    try {
        const savedLab = await newLab.save();
        res.status(201).json(savedLab);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add a new test to a lab
const addTest = async (req, res) => {
    const { labId } = req.params;
    const { testId, name, price } = req.body;
    if (!testId || !name || !price) {
        return res.status(400).json({ message: 'Test ID, name, and price are required.' });
    }
    try {
        const lab = await Lab.findById(labId);
        if (!lab) {
            return res.status(404).json({ message: 'Lab not found.' });
        }
        lab.tests.push({ testId, name, price });
        const updatedLab = await lab.save();
        res.status(201).json(updatedLab);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update test price
const updateTestPrice = async (req, res) => {
    const { labId, testId } = req.params;
    const { price } = req.body;

    if (price === undefined) {
        return res.status(400).json({ message: 'New price is required.' });
    }
    
    try {
        const lab = await Lab.findById(labId);
        if (!lab) {
            return res.status(404).json({ message: 'Lab not found.' });
        }
        
        const testToUpdate = lab.tests.find(t => t.testId === testId);
        if (!testToUpdate) {
            return res.status(404).json({ message: 'Test not found in this lab.' });
        }
        
        testToUpdate.price = price;
        const updatedLab = await lab.save();
        res.json(updatedLab);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a lab
const deleteLab = async (req, res) => {
    const { labId } = req.params;
    try {
        const deletedLab = await Lab.findByIdAndDelete(labId);
        if (!deletedLab) {
            return res.status(404).json({ message: 'Lab not found.' });
        }
        res.json({ message: 'Lab deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a test from a lab
const deleteTest = async (req, res) => {
    const { labId, testId } = req.params;
    try {
        const lab = await Lab.findById(labId);
        if (!lab) {
            return res.status(404).json({ message: 'Lab not found.' });
        }

        lab.tests = lab.tests.filter(test => test.testId !== testId);
        const updatedLab = await lab.save();
        res.json(updatedLab);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const addBulkTests = async (req, res) => {
    const { labId } = req.params;
    const { tests } = req.body;

    if (!Array.isArray(tests) || tests.length === 0) {
        return res.status(400).json({ message: 'No tests provided' });
    }

    try {
        const lab = await Lab.findById(labId);
        if (!lab) return res.status(404).json({ message: 'Lab not found' });

        const formattedTests = tests.map(t => ({
            testId: t.testId || `test_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: t.name,
            price: parseFloat(t.price),
        }));

        lab.tests.push(...formattedTests);
        await lab.save();

        res.status(200).json({ message: 'Bulk tests added successfully', added: formattedTests.length });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getLabs,
    addLab,
    addTest,
    updateTestPrice,
    deleteLab,
    deleteTest,
    addBulkTests
};
