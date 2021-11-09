import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    isLandLord: { type: Boolean, required: true },
    reviews: [String],
    //not sure why but tutorial put an id there even tho mongoose makes them for you
    // id: { type: String },
},{ timestamps: true });

export default mongoose.model("User", userSchema)