const transactionsModel=require('../models/transactionSchema')
const axios = require('axios');
exports.getTransactionsList= async (address)=> {
const response= await axios.get("https://api.etherscan.io/api?module=account&action=txlist&address="+address+"&startblock=0&endblock=99999999&sort=asc&apikey=UXHYBNDBZFGQHS4KS2MG5R15UTS3Z9PGWK");
const transactions=response.data.result;
transactions.forEach(async (transaction) => {    
const transactionfound=await transactionsModel.findOne({address,blockNumber:transaction.blockNumber});
    if(!transactionfound){
        await transactionsModel.create({address,...transaction});
    }
});
return transactions;
}