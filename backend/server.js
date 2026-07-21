import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})