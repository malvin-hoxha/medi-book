import express from 'express';
import upload from '../middlewares/muller';

import { addDoctor } from './doctorController';

const adminRouter = express.Router();

adminRouter.post('/add-doctor', upload.single('image'), addDoctor);