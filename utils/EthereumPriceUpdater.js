const  axios= require('axios');
var CronJob = require('cron').CronJob;
const etherModel = require('../models/etherSchema');
EthereumUpdaterCron = async () => {
    let price;
    const resp = await axios.get(
        'https://rest.coinapi.io/v1/exchangerate/ETH/INR/?apikey=86C4EFB0-3DA8-414E-A80D-E126A3135F3B',
        {
            headers: {
                'Accept-Encoding': 'application/json',
            }
        }
    );
    price = resp.data.rate;
    // console.log(price);
    const ether = await etherModel.findOne({ name: 'Ethereum' });
        if (!ether) {
            const newEther = new etherModel({
                name: 'Ethereum',
                price: price
            });
            await newEther.save();
        }
        else {
            ether.price = price;
            await ether.save();
        }
    return price;

}

var job = new CronJob(
    '*/10 * * * *',
    () => EthereumUpdaterCron(),
    null,
    true,
    'Asia/Kolkata'
);
module.exports = { job, EthereumUpdaterCron };

