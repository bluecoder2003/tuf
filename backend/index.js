const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const flashcardRoutes = require("./routes");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(bodyParser.json());

app.use("/api/flashcards", flashcardRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: err.message });
});