const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const flashcardRoutes = require("./routes");

const app = express();
app.use(cors());
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