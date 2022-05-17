/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './courses.css'
const apiKey = '18585d0d3a6b8701388a2844';

function Courses() {
  const [currency, setCurrency] = useState({ rub: 'RUB', usd: 'USD', eur: 'EUR'});
  const [listCurrency, setListCurrency] = useState({});

  const getCurrency = currency => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
      .then(res => {
        setListCurrency(res.data.conversion_rates);
      })
      .catch(() => setListCurrency({ 'currency not found': '' }));
  };

  // useEffect(() => {
  //   const langBrowser = (navigator.language || navigator.userLanguage).substr(0, 2);
  //   console.log(currency, 'ЛАНГ');
  //   if (langBrowser === 'ru') {
  //     getCurrency(currency.rub);
  //   } else if (langBrowser === 'en') {
  //     getCurrency(currency.usd);
  //   }
  // }, []);

  useEffect(() => {
  
      getCurrency(currency.rub);
    
  }, [currency]);

  return (
    <div>
          <button onClick={() => getCurrency(currency.rub)}>рубли</button>
          <button onClick={() => getCurrency(currency.usd)}>доллары</button>
          <button onClick={() => getCurrency(currency.eur)}>евро</button>

           {Object.entries(listCurrency).map(([currency, val]) => (
            <div key={currency}>
              <span>{val}</span>
              <p>{currency}</p>
            </div>
          ))}
    </div>
  );
}

export default Courses;
