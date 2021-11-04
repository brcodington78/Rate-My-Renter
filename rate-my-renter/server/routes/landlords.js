import express from "express";
import auth from '../middleware/auth.js';
import {getLandlord, updateLandlord, deleteLandlord, getLandlords, createLandlord} from '../controllers/landlords.js'

const router = express.Router();

router.get('/', getLandlords)
router.post("/", auth, createLandlord);

router.route("/:id")
    .get(getLandlord)
    .put(updateLandlord)
    .delete(deleteLandlord)
// router.delete("/:id", deleteLandlord)


export default router
