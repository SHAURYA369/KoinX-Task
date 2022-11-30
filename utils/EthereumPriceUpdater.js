import axios from 'axios';
import * as cron from 'cron'
import { DB } from "../database/db";
async function EthereumUpdaterCron() {
    const response=await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp&vs_currencies=inr");
    const price=response.data.ethereum.inr;
    
}


var job = new cron.CronJob(
	'*/10 * * * *',
	() => EthereumUpdaterCron(),
	null,
	true,
	'Asia/Kolkata'
);

job.start();
