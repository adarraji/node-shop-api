const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


const app = express();
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})