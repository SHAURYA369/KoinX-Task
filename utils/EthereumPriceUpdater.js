import axios from 'axios';
import * as cron from 'cron'
const etherModel=require('../models/etherSchema');
exports.getEtherPrice=async ()=>{
    const response=await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp&vs_currencies=inr");
    const price=response.data.ethereum.inr;
    return price;
}
EthereumUpdaterCron=async ()=> {
    const price=await getEtherPrice();
    console.log(price);
    const ether=await etherModel.findOne({});
    if(ether){
        await etherModel.updateOne({
            value:price
        });
    }
    else{
        await etherModel.create({
            value:price
        });
    }
}

var job = new cron.CronJob(
	'* * * * * *',
	() => EthereumUpdaterCron(),
	null,
	true,
	'Asia/Kolkata'
);

job.start();
