import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type:String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    isLandLord: {type: Boolean, required: true},
    id: {type: String}

})

export default mongoose.model("User", userSchema)