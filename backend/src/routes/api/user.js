import express from 'express';
import * as usersDao from '../../db/users-dao';

const HTTP_CREATED = 201;

const router = express.Router();

router.post('/', async (req, res) => {
    const newUser = await usersDao.createUser(req.body);
    res.status(HTTP_CREATED)
        .header('location', `/api/user/${newUser._id}`)
        .json(newUser);
});

export default router;
