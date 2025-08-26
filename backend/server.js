import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.json({ "message": "Hey" });
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})