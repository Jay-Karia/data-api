import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/send", (req, res) => {
  const data = req.body;
  console.log("Received sensor data:", data);
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
