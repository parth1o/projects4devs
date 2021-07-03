import express from 'express';
import { retrieveSkillList } from '../../db/skill-dao';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_SERVICE_UNAVAILABLE = 503;
const HTTP_NO_CONTENT = 204;
const HTTP_OK = 200;

const router = express.Router();

// API to retrieve all plans
router.get('/', async (req, res) => {
    res.status(HTTP_OK).json(await retrieveSkillList());
});

export default router;
