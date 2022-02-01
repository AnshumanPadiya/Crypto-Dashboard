require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
    res.json("hi");
})

app.get("/news", (req, res) => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios.request(options)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.json(error);
      });
})

app.get('/convert', (req, res) => {

    const to_currency = req.query.to_currency;
    const from_currency = req.query.from_currency;

    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: from_currency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: to_currency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios.request(options)
      .then(function (response) {
        res.json(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      })
      .catch(function (error) {
        console.error(error);
      });
})

app.listen(PORT, () => console.log(`The server is up and running at port ${PORT}`));

