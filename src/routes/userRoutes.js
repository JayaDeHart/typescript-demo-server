var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const userRoutes = express.Router();
const db = require('../db');
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username } = req.params;
        try {
            const [rows, fields] = yield db.query('SELECT `username`, `email` FROM `users` WHERE `username`= ? ', [username]);
            res.status(200).json({ user: rows });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error' });
        }
    });
}
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password, email } = req.body;
        try {
            const user = {
                username,
                password,
                email,
            };
            const [rows, fields] = yield db.query('INSERT INTO `users` ("username", "password", "email") VALUES (? ? ?)', [user.username, user.password, user.email]);
            res.status(202).json({ createdUser: rows });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error' });
        }
    });
}
userRoutes.get('/user/:username', getUser);
userRoutes.post('/user', addUser);
module.exports = userRoutes;
