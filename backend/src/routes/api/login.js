import express from 'express';
import jwt from 'jsonwebtoken';
import * as usersDao from '../../db/users-dao';

const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_UNAUTHORIZED = 401;

const router = express.Router();

router.post('/', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    //retrieve user info from db
    const dbUser = await usersDao.retrieveUserByEmail(email);

    if (dbUser) {
        let match = dbUser.comparePassword(password);
        if (!match) {
            res.sendStatus(HTTP_UNAUTHORIZED);
        } else {
            const token = jwt.sign(
                { userId: dbUser._id },
                process.env.SECRET_KEY,
                { expiresIn: '24h' });

            res.status(HTTP_OK)
                .json({token: token});
        }
    } else {
        res.sendStatus(HTTP_NOT_FOUND);
    }
});

export default router;
