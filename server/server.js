// Optional checklist sync backend. Not required — the template works fully
// offline with storage.kind:"localStorage". Point config.js at this server
// with storage: { kind: "restApi", endpoint: "http://localhost:3000/api/checklist" }.
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "checklist.json");

app.use(cors());
app.use(express.json());

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.get("/api/checklist", (req, res) => {
  if (fs.existsSync(DATA_FILE)) {
    try {
      const data = fs.readFileSync(DATA_FILE, "utf8");
      res.json(JSON.parse(data));
    } catch (e) {
      res.status(500).json({ message: "Data file is corrupted" });
    }
  } else {
    res.status(404).json({ message: "No data found" });
  }
});

app.post("/api/checklist", (req, res) => {
  const data = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ message: "Invalid data format" });
  }
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ message: "Failed to save data" });
  }
});

app.listen(PORT, () => {
  console.log(`Checklist API listening on http://localhost:${PORT}`);
});
