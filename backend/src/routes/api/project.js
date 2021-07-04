import express from 'express';
import {
    createProject,
    retrieveProjectList,
    deleteAllProjects,
} from '../../db/project-dao';
import auth from '../../middleware/auth';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_SERVICE_UNAVAILABLE = 503;
const HTTP_NO_CONTENT = 204;
const HTTP_OK = 200;

const router = express.Router();

// API to create new project
router.post('/', auth, async (req, res) => {
    await createProject({
        ...req.body,
        _id: undefined,
        owner: req.body._id
    });
    res.sendStatus(HTTP_CREATED);
});

// API to retrieve all plans
router.get('/', async (req, res) => {
    res.status(HTTP_OK).json(await retrieveProjectList());
});

router.delete('/', async (req, res) => {
    await deleteAllProjects();
    res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
