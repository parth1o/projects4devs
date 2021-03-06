import {retrieveUserById} from '../db/users-dao';
const jwt = require('jsonwebtoken');

export default async function auth(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.userId;
        const dbUser = await retrieveUserById(userId);

        if (!dbUser) {
            res.sendStatus(401);
        } else {
            req.body._id = dbUser._id;
            next();
        }
    } catch (err) {
        res.sendStatus(401);
    }
};
