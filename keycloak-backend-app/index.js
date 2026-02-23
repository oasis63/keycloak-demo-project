const express = require("express");
const cors = require("cors");

// import authenticate from "./routes/authenticate.js";
const authenticate = require("./routes/authenticate.js");
const getDocuments = require("./routes/documents.js");

const app = express();
const PORT = 3000;

// load environment variables from .env file
require("dotenv").config();


// simulating the db data
let data = ["apple", "banana", "cherry"];

// Middleware (optional)
app.use(express.json());

// cors
// ✅ Enable CORS (allow specific origin)
app.use(
    cors({
        origin: "http://localhost:5173", // frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Node.js backend! 🌟",
    });
});

// Simple GET endpoint
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello from Node.js 🚀",
    });
});

// Simple POST endpoint
app.post("/echo", (req, res) => {
    res.json({
        youSent: req.body,
    });
});


app.get("/data", authenticate, (req, res) => {
    res.json({
        data,
        user: req.user,
    });
});

app.get("/documents", authenticate, getDocuments);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});