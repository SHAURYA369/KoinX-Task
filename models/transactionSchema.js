
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    address: {
        type: String,
        required: [true]
    },
    blockNumber: {
        type: Number,
        required: [true]
    },
    timeStamp: {
        type: Number,
        required: [true]
    },
    hash: {
        type: String,
        required: [true]
    },
    nonce: {
        type: Number,
        required: [true]
    },
    blockHash: {
        type: String,
        required: [true]
    },
    transactionIndex: {
        type: Number,
        required: [true]
    },
    from: {
        type: String,
        required: [true]
    },
    to: {
        type: String,
        required: [true]
    },
    value: {
        type: Number,
        required: [true]
    },
    gas: {
        type: Number,
        required: [true]
    },
    gasPrice: {
        type: Number,
        required: [true]
    },
    isError: {
        type: Number,
        required: [true]
    },
    txreceipt_status: {
        type: Number,
        required: [true]
    },
    input: {
        type: String,
        required: [true]
    },
    contractAddress: {
        type: String,

    },
    cumulativeGasUsed: {
        type: Number,
        required: [true]
    },
    gasUsed: {
        type: Number,
        required: [true]
    },
    confirmations: {
        type: Number,
        required: [true]
    },
    methodId: {
        type: String,
        required: [true]
    },
    functionName: {
        type: String,

    }

});

module.exports = mongoose.model('Transaction', transactionSchema);