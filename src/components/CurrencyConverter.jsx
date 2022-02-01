import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const coins = [
    "BTC",
    "ETH",
    "USDT",
    "XRP",
    "LTC",
    "ADA",
    "SOL",
    "USDC",
    "AVAX",
    "BNB",
    "LUNA",
  ];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(0);
  // const [exchangeRate, setExchangeRate] = useState(0);
  // const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] =  useState("BTC");
  // const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState("BTC");
  const [result, setResult] = useState(0);

  const [exchangeData, setExchangeData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    ExchangeRate: 0
  })

  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:4000/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios.request(options)
      .then(function (response) {
        // setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        setResult(response.data * amount);
        // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);

        setExchangeData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          ExchangeRate: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div
      className="currency-converter rounded-lg bg-green-700 text-slate-200 p-10 m-10
    flex flex-col items-center justify-center
    "
    >
      {/* <h2 className="text-5xl">Currency Converter</h2> */}

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency: </td>
              <td>
                <input
                  className="text-gray-700"
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  name="currency-option-1"
                  className="currency-options text-gray-700"
                  value={chosenPrimaryCurrency}
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {coins.map((coin, _index) => (
                    <option key={_index}>{coin}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency: </td>
              <td>
                <input
                  className="text-gray-700"
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  name="currency-option-2"
                  className="currency-options text-gray-700"
                  value={chosenSecondaryCurrency}
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {coins.map((coin, _index) => (
                    <option key={_index}>{coin}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate exchangeData={exchangeData} />
    </div>
  );
};

export default CurrencyConverter;
