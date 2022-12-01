
const express = require('express');
const TransactionController = require('../controllers/transactions');
const BalanceController = require('../controllers/balance');
const router = express.Router();

router.post('/getUserTransactions', TransactionController.findTransactions);
router.post('/getUserBalance', BalanceController.getbalance);


module.exports = router;