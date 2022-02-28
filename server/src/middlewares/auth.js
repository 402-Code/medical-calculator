import express from 'express';
import jwt from 'jsonwebtoken';
import user from '../models';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function authMiddleware(req, res, next) {
    try {
        const accessToken = req.cookies['access-token']
        console.log(accessToken);

        const payload = jwt.verify(accessToken, process.env.SECRET_TOKEN)
        console.log(payload);
        req.user = { id: payload._id };

        user.findById(payload._id)
        req.user = user;
     
        return next();
    }
    catch (err) {
        res.status(401).send({ message: 'Brak autoryzacji' })
    }
};


