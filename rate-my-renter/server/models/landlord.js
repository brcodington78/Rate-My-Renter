import mongoose from 'mongoose'; 

const landlordSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    //landlordUserId will be an association to a landlord that has a user account
    landlordUserId: String,
    tags: [String],
    reviews: [String],
    properties: [String],
  },
  { timestamps: true }
); 


const Landlord = mongoose.model('Landlord', landlordSchema);

export default Landlord