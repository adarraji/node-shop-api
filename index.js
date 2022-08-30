const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");



const app = express();
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})