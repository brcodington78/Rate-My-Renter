import express from "express";
import {login, signup, getUsers} from '../controllers/users.js';

const router = express.Router();

router.post('/login', login );
router.post('/signup', signup);
router.get('/', getUsers);
router.get("/:id", deleteUser)

export default router;