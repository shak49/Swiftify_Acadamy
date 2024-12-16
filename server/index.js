import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
