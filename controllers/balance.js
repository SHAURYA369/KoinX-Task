const balanceModel=require('../models/balanceSchema')
const axios = require('axios');
exports.findbalance = async (req, res) => {
    try {
        const {address} = req.body;
        console.log(address);
        const response= await axios.get("https://api.etherscan.io/api?module=account&action=txlist&address="+address+"&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=UXHYBNDBZFGQHS4KS2MG5R15UTS3Z9PGWK");
        const transactions=response.data.result;
        transactions.forEach(async (transaction) => {    
        const transactionfound=await transactionsModel.findOne({address,blockNumber:transaction.blockNumber});
            if(!transactionfound){
                await transactionsModel.create({address,...transaction});
            }
        });
        res.send(response.data.result);
        
    } catch (err) {
        console.log(err);
    }
}