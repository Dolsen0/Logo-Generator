import express from 'express'
import { Configuration, OpenAIApi } from 'openai';
import { apiKey } from "./passkey.js";

const app = express()
const port = 5857

const configuration = new Configuration({
    apiKey: apiKey
})

const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
    prompt: "Create a modern logo for a software company named 'Olsen Software'",
    n:1,
    size: "512x512"
})
const image_url = response.data.data[0].url

app.get("/" , (req,res) => {
    res.send(image_url)
})

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}/`)
  })

