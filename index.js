const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

let orders = {}

app.get("/", (req,res)=>{
  res.send("🚀 KL EV HUB IS LIVE")
})

app.post("/create-order",(req,res)=>{
  const id = "EV"+Date.now()
  orders[id] = {status:"PENDING"}
  res.json({orderId:id})
})

app.listen(3000,()=>{
  console.log("Server running")
})
