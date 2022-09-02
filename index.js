const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const app = express();
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));

app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/orders", cartRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})