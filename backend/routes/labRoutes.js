const express = require('express');
const {
    getLabs,
    addLab,
    addTest,
    updateTestPrice,
    deleteLab,
    deleteTest,
    addBulkTests
} = require('../controllers/labController');

const router = express.Router();

// Lab routes
router.get('/labs', getLabs);
router.post('/labs', addLab);
router.delete('/labs/:labId', deleteLab);

// Test routes
router.post('/labs/:labId/tests', addTest);
router.put('/labs/:labId/tests/:testId/price', updateTestPrice);
router.delete('/labs/:labId/tests/:testId', deleteTest);
router.post('/labs/:labId/bulk-tests', addBulkTests);
module.exports = router;
