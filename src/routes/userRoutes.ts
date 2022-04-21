import express, { Request, Response } from 'express';
const userRoutes = express.Router();
const db = require('../db');
import { User } from '../types/types';

async function getUser(req: Request, res: Response) {
  const { username } = req.params;
  try {
    const [rows, fields] = await db.query(
      'SELECT `username`, `email` FROM `users` WHERE `username`= ? ',
      [username]
    );
    res.status(200).json({ user: rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error' });
  }
}

async function addUser(req: Request, res: Response) {
  const { username, password, email } = req.body;

  try {
    const user: User = {
      username,
      password,
      email,
    };
    const [rows, fields] = await db.query(
      'INSERT INTO `users` ("username", "password", "email") VALUES (? ? ?)',
      [user.username, user.password, user.email]
    );
    res.status(202).json({ createdUser: rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error' });
  }
}

userRoutes.get('/user/:username', getUser);
userRoutes.post('/user', addUser);

module.exports = userRoutes;
