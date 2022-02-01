import React from 'react';

const ExchangeRate = ( { exchangeData } ) => {
    return (
      <div className="exchange-rate">
        <h2>
          <p>
            {exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}
          </p>
        </h2>
        <h3>Exchange Rate: </h3> <h2>{exchangeData.ExchangeRate}</h2>
      </div>
    );
}

export default ExchangeRate;
