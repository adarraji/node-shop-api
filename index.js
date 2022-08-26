const express = require("express");
require('dotenv').config();

const app = express();


app.listen(process.env.PORT || "5000", () => {
    console.log(`app is running on port ${process.env.PORT}`)
})