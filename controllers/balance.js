const { getTransactionsList } = require('../utils/transactionList');
const { EthereumUpdaterCron } = require('../utils/EthereumPriceUpdater');
exports.getbalance = async (req, res) => {
    try {
        const { address } = req.body;
        console.log(address);
        const transactions = await getTransactionsList(address);
        let balance = 0;
        transactions.forEach((transaction) => {
            if (transaction.to == address)
                balance = balance + Number(transaction.value);
            else
                balance = balance - Number(transaction.value);
        });
        const price = await EthereumUpdaterCron();
        res.status(200).send({ balance, price });
    } catch (err) {

        console.log(err);
        res.status(200).send("Unexpected Error");
    }
}