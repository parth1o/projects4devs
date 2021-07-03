import express from 'express';
import {
    createProject,
    retrieveProjectList,
} from '../../db/project-dao';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_SERVICE_UNAVAILABLE = 503;
const HTTP_NO_CONTENT = 204;
const HTTP_OK = 200;

const router = express.Router();

// API to create new project
router.post('/', async (req, res) => {
	console.log(req.body)
    const newProject = await createProject(req.body);
	console.log(newProject)
	res.sendStatus(HTTP_CREATED);
})

// API to retrieve all plans
router.get('/', async (req, res) => {
    res.status(HTTP_OK).json(await retrieveProjectList());
});

export default router;