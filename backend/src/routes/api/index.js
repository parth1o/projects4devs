import express from 'express';

const router = express.Router();

import project from './project';
router.use('/project', project);

export default router;