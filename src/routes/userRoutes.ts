import express, { Request, Response } from 'express';
const userRoutes = express.Router();
const db = require('../db');
const { User } = require('../types/types');

async function getUser(req: Request, res: Response) {
  const { username } = req.body;
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
    const [rows, fields] = await db.query(
      'INSERT INTO `users` ("username", "password", "email") VALUES (? ? ?)'
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error' });
  }
}
