import express from "express";
import {login, signup, getUsers, deleteUser} from '../controllers/users.js';

const router = express.Router();

router.post('/login', login );
router.post('/signup', signup);
router.get('/', getUsers);
router.delete("/:id", deleteUser)

export default router;