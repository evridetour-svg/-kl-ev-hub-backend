const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST
app.get("/", (req, res) => {
  res.send("KL EV HUB LIVE");
});

// DATA
let bookings = [];

// CREATE
app.post("/create-order", (req, res) => {
  const booking = {
    id: "EV" + Date.now(),
    tour: req.body?.tour || "City Tour",
    price: req.body?.price || 0
  };

  bookings.push(booking);

  res.json(booking); // IMPORTANT
});

// LIST
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(process.env.PORT || 3000);
