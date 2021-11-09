import mongoose from 'mongoose'; 

const landlordSchema = mongoose.Schema({
    name: { type: String, required: true },
    //userId will be an association to a landlord that has a user account
    userId: String,
    tags: [String],
    reviews: [String],
    properties: [String],
},
{ timestamps: true }
); 


const Landlord = mongoose.model('Landlord', landlordSchema);

export default Landlord