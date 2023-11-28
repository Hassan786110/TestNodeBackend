const express = require("express");
const app = express();
const cron = require("node-cron");
const PORT = process.env.PORT || 5001;

// body parser
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.json({ message: "MY BACKEND" });
});

app.get("/api/test", (req, res) => {
  console.log("Api Hit");
  const task = cron.schedule("* * * * * *", () => {
    console.log("running " + new Date());
  });
  task.start();
  setTimeout(() => {
    console.log("stop");
    task.stop();
  }, 3000);
  res.json({ message: "success" });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
