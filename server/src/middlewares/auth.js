import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function authMiddleware(req, res, next) {
    try {
        const accessToken = req.cookies['access-token']
        accessToken

        const payload = jwt.verify(accessToken, process.env.SECRET_TOKEN)
        console.log(payload);

        req.user = User;
        User.findById(payload._id)

        return next();
    }
    catch (err) {
        res.status(401).send({ message: 'Brak autoryzacji' })
    }
};
