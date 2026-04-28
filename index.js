import express from 'express';
import dotenv from 'dotenv';
import connectBD from './Database/MongoDB.js';
import router from './Route/router.js';

const port = 3000;
const app = express();

dotenv.config();

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json({
        message:"Automatic mail server is live"
    })
})

app.use('/Userdetails',router);

app.listen(process.env.PORT,() => {
    console.log("Server is running");
    connectBD()
})