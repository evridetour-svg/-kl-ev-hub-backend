const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// TEMP DATABASE (INI SIMPAN BOOKING)
let bookings = [];

// HOME TEST
app.get("/", (req, res) => {
  res.send("🚀 KL EV HUB IS LIVE");
});

// CREATE BOOKING
app.post("/create-order", (req, res) => {
  const { tour, price } = req.body;

  const booking = {
    id: "EV" + Date.now(),
    tour,
    price,
    time: new Date()
  };

  bookings.push(booking);

  res.json(booking);
});

// GET ALL BOOKINGS (ADMIN VIEW)
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
