import express from "express";
import { ENV } from "./config/env.js";
import { connectToDB } from "./config/db.js";

const app = express();


app.get("/", (req, res) => {
    res.json({ "message": "Hey" });
})

app.listen(ENV.PORT, () => {
    console.log(`Server is running at PORT: ${ENV.PORT}`);
    connectToDB();
})