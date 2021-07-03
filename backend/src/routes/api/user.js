import express from 'express';
import * as usersDao from '../../db/users-dao';

const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newUser = await usersDao.createUser(req.body);
        res.status(HTTP_CREATED)
            .header('location', `/api/user/${newUser._id}`)
            .json(newUser);
    } catch {
        res.sendStatus(HTTP_BAD_REQUEST);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let user = await usersDao.retrieveUser(req.params.id)
        res.json(user);
    } catch {
        res.sendStatus(HTTP_BAD_REQUEST);
    }
});

export default router;
