const { getTransactionsList } = require("../utils/transactionList");
exports.findTransactions = async (req, res) => {
    try {
        const { address } = req.body;
        // console.log(address);
        const transactions = await getTransactionsList(address);
        res.status(200).send(transactions);
    } catch (err) {
        console.log(err);
        res.status(200).send("Unexpected Error");
    }
}