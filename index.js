const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("🚀 KL EV HUB IS LIVE");
});

// memory database
let bookings = [];

// create booking
app.post("/create-order", (req, res) => {
  try {
    const { tour, price } = req.body;

    const booking = {
      id: "EV" + Date.now(),
      tour: tour,
      price: price,
      time: new Date().toISOString()
    };

    bookings.push(booking);

    return res.json(booking);

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

// get bookings (admin)
app.get("/bookings", (req, res) => {
  return res.json({
    total: bookings.length,
    data: bookings
  });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
