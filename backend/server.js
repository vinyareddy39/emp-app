import exp from 'express'
import { EmpApp } from './API/empApi.js' 
import { connect } from 'mongoose' 
import cors from "cors";
import 'dotenv/config';

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);
app.use(exp.json())  
app.use('/emp-api',EmpApp) 
const port = process.env.PORT || 3000;
app.listen(port , () => console.log(`server listening port ${port} ...`))

 



 async function connectDB() {
    try {
        await connect(process.env.MONGO_URI || "mongodb://localhost:27017"); 
        console.log("db connection success")

    } catch (err) {
        console.log("error in db connection", err)
    }
}
connectDB()     



//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
