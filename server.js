
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/userRouter.js';
import mongoose from 'mongoose';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

app.use(cors());

app.use('/api', router);

mongoose
  .connect(process.env.mongoSTR)
  .then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,() => {
      console.log(`Server is running or PORT ${PORT}`);
      
    })
  })
  .catch(()=>{
    console.log('Error connecting to MongoDB');
  });