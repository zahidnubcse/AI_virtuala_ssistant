import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import authRouter from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/userRoute.js'
dotenv.config()

const app = express()
app.use (cors({
    origin: "http://localhost:5173",
    credentials:true
}))
const port = process.env.PORT || 4000

//server
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)


app.listen(port,()=>{
    connectDB()
    console.log("Server is running");
    
})