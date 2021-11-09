import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparser from 'body-parser';
import reviewRoutes from './routes/reviews.js';
import userRoutes from "./routes/users.js";
import landlordRoutes from "./routes/landlords.js";
import { MONGO_URI } from './config/keys.js';


const app = express();


app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

app.use("/api/reviews", reviewRoutes)
app.use("/api/users", userRoutes)
app.use("/api/landlords", landlordRoutes)

const PORT = process.env.PORT || 8000;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on on port: ${PORT}`)))
    .catch((error) => console.log(error.message) );

