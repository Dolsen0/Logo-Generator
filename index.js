import express from 'express'
import { apiKey } from "./passkey.js";

const app = express()
const port = 5857

app.get("/" , (req,res) => {
    res.send("Logo Generator")
})

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}/`)
  })

