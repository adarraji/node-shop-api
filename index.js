const express = require("express");
require('dotenv').config();
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})