import Mongoose from 'mongoose';
import Landlord from '../models/landlord.js';

export const getLandlord = async (req, res) => {
    try {
        const landlord = await Landlord.findOne();

        console.log(landlord);
    } catch (error) {
        res.status(404).json(json({ message: error.message}));
    }
}

export const updateLandlord = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const landlord = req.body

        if(!Mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No landlord with that id.')

        const updatedLandlord = await Landlord.findByIdAndUpdate(_id, landlord, {new: true});

        res.json(updatedLandlord)
    } catch (error) {
        console.log(error)
    }
}

export const deleteLandlord = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
}

export const getLandlords = async (req, res) => {
    try {
        const landlords = await Landlord.find();

        console.log(landlords);
    } catch (error) { 
        res.status(404).json({ message: error.message})
    }
}

export const createLandlord = async (req, res) => {
    const landlord = req.body;

    const newLandlord = new Landlord(landlord);

    try {
        await newLandlord.save();

        res.status(201).json(newLandlord)
    } catch (error){
        res.status(406).json({ message: error.message})
    }
}