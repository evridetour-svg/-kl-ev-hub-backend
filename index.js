const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// MEMORY DATABASE (temporary simpan booking)
let bookings = [];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("🚀 KL EV HUB IS LIVE");
});

// CREATE BOOKING
app.post("/create-order", (req, res) => {
  const { tour, price } = req.body;

  // create booking object
  const booking = {
    id: "EV" + Date.now(),
    tour: tour,
    price: price,
    time: new Date().toISOString()
  };

  // simpan dalam array
  bookings.push(booking);

  // return response
  res.json(booking);
});

// GET ALL BOOKINGS (ADMIN CHECK)
app.get("/bookings", (req, res) => {
  res.json({
    total: bookings.length,
    data: bookings
  });
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});
