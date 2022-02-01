import React from 'react';
import NewsFeed from './components/NewsFeed.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';

function App() {
  return (
    <>
      <h2 className="text-5xl flex justify-center p-5 m-10 text-slate-200">Currency Converter</h2>
      <div className="app flex justify-center items-center">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </>
  );
}

export default App;
