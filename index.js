const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("KL EV HUB LIVE");
});

// MEMORY SAFE
let bookings = [];

// SAFE CREATE ORDER (NO CRASH VERSION)
app.post("/create-order", (req, res) => {
  try {
    const tour = req.body && req.body.tour ? req.body.tour : "City Tour";
    const price = req.body && req.body.price ? req.body.price : 0;

    const booking = {
      id: "EV" + Date.now(),
      tour: tour,
      price: price
    };

    bookings.push(booking);

    // FORCE JSON STRING (ANTI ERROR)
    res.setHeader("Content-Type", "application/json");
    return res.send(JSON.stringify(booking));

  } catch (e) {
    return res.send(JSON.stringify({
      id: "ERROR",
      message: e.message
    }));
  }
});

// BOOKINGS
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
