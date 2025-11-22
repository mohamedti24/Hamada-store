import express from 'express';
import productApi from './productApi.js';
import userApi from './userApi.js';
import orderApi from './orderApi.js';
import cartApi from "./cartApi.js";

const router = express.Router();

router.use('/', productApi);
router.use('/', userApi);
router.use('/', orderApi);
router.use("/cart", cartApi);


export default router;
