// server.js
const express = require("express");
require("dotenv").config();
const cors = require("cors"); // added

const connectDB = require("./config/db"); //added

const app = express();

// routes
const todo = require("./routes/todo");

connectDB();

// cors
app.use(cors({ origin: true, credentials: true })); // added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});