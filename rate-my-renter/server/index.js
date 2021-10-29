import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparser from 'body-parser';
import reviewRoutes from './routes/reviews.js';
import userRoutes from "./routes/users.js";


const app = express();


app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

app.use("/reviews", reviewRoutes)
app.use("/user", userRoutes)

const CONNECTION_URL = "mongodb+srv://dev:poopybutt11@cluster0.tbzqw.mongodb.net/rateMyRenterDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on on port: ${PORT}`)))
    .catch((error) => console.log(error.message) );

