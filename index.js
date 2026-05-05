const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// TEST SERVER
app.get("/", (req, res) => {
  res.send("🚀 KL EV HUB IS LIVE");
});

// BOOKING API (INI YANG ANDA TAK ADA TADI)
app.post("/create-order", (req, res) => {
  const { tour, price } = req.body;

  res.json({
    orderId: "EV" + Date.now(),
    tour,
    price
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
