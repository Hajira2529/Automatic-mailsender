import express from 'express'
import {
    userinfo 
    } from '../Controller/controller.js';

const router = express.Router();

router.post('/usertab',userinfo);

export default router;