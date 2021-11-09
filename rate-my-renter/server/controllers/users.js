import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Mongoose from 'mongoose';

import User from '../models/user.js';

export const login = async (req,res) => {
    const {email, password} = req.body;

    try {
            const existingUser = await User.findOne({ email });
            console.log("hitting")
            if(!existingUser) return res.status(404).json({ message: "User does not exist."});

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials."})

            const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"})

            res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong'})
    }
};

export const signup = async (req, res) => {
    const {firstName, lastName, email, username, password, confirmPassword, isLandLord} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "This email is already registered!"});

        if (password !== confirmPassword) return res.status(400).json({message: "Passwords do not match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, username, firstName, lastName, isLandLord})

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
};

export const getUsers = async (req, res) => {
    try {
        console.log('getting Users')
        const users = await User.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        console.log('hitting')
        const {id} = req.params;
        console.log(req.params)
        if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');

        await User.findByIdAndRemove(id);

        res.json({ message: 'User successfully deleted'})
    } catch (error) {
        console.log('something went wrong when deleting the user')
    }
}