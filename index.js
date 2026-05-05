const express = require("express");
const cors = require("cors");

const app = express();

// middleware wajib
app.use(cors());
app.use(express.json());

// home test
app.get("/", (req, res) => {
  res.send("🚀 KL EV HUB LIVE");
});

// simpan data booking (temporary)
let bookings = [];

// create booking
app.post("/create-order", (req, res) => {
  const tour = req.body?.tour || "Unknown";
  const price = req.body?.price || 0;

  const booking = {
    id: "EV" + Date.now(),
    tour,
    price
  };

  bookings.push(booking);

  res.json(booking);
});

// lihat semua booking
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
