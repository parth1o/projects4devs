import express from 'express';

const router = express.Router();

import user from './user';
router.use('/user', user);

import login from './login';
router.use('/login', login);

import project from './project';
router.use('/project', project);

import skill from './skill';
router.use('/skill', skill);

export default router;