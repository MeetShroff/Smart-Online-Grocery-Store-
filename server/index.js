import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8000;

const app = express();
dotenv.config();

defaultData();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);



const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);




app.listen(PORT, () =>console.log(`Server is listening on port ${PORT}`));

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams= {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'

