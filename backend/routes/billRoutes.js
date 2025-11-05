const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

// Route to save a new bill
router.post('/', billController.createBill);

// Route to get all bills
router.get('/', billController.getAllBills);

router.delete('/:id', billController.deleteBill);
router.post('/multiple', billController.deleteMultipleBills);

module.exports = router;
