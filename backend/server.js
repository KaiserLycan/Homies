import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;



//Testing the backend
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})