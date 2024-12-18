import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

const app = express();

dotenv.config();
// 3000 PORT Connection
app.listen(3000, () => {
    console.log('>>> Server is running on port 3000! <<<');
});
// DB Connection
mongoose.connect(process.env.MONGODB).then(() => {
    console.log('>>> Successfully connected to Swiftify DB! <<<');   
}).catch((error) => {
    console.log(error);
});

app.use(express.json());
app.use(cors());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
// Middlewares
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
