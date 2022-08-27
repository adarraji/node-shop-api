const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gnkjwte.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));

app.use("/api/users", userRoute);

app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})