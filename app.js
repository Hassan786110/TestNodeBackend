const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

// body parser
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.json({ message: "MY BACKEND" });
});

app.get("/api/test", (req, res) => {
  console.log("Api Hit");
  setTimeout(() => {
    console.log("running " + new Date());
  }, 3000);
  res.json({ message: "success" });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
