import express from 'express';

const router = express.Router();

import user from './user';
router.use('/user', user);

import project from './project';
router.use('/project', project);

export default router;