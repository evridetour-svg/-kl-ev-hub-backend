const express = require("express");
const cors = require("cors");

const app = express();

// IMPORTANT middleware
app.use(cors());
app.use(express.json());

// TEST LIVE
app.get("/", (req, res) => {
  res.send("KL EV HUB LIVE");
});

// MEMORY DATABASE
let bookings = [];

// CREATE BOOKING (FIXED 100%)
app.post("/create-order", (req, res) => {
  console.log("BODY:", req.body);

  const booking = {
    id: "EV" + Date.now(),
    tour: req.body?.tour || "City Tour",
    price: req.body?.price || 0
  };

  bookings.push(booking);

  // 🔥 IMPORTANT: ALWAYS RETURN JSON
  return res.status(200).json(booking);
});

// GET BOOKINGS
app.get("/bookings", (req, res) => {
  return res.json(bookings);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
