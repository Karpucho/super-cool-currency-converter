/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './courses.css'
const apiKey = '18585d0d3a6b8701388a2844';

function Courses() {
  const [currency, setCurrency] = useState({ rub: 'RUB', usd: 'USD', eur: 'EUR'});
  const [currencyInLi, setCurrencyInLi] = useState('рубль');
  const [listCurrency, setListCurrency] = useState({});

  const getCurrency = currency => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
      .then(res => {
        setListCurrency(res.data.conversion_rates);
      })
      .catch(() => setListCurrency({ 'currency not found': '' }));
  };

  useEffect(() => {
      getCurrency(currency.rub);
  }, [currency]);

  return (
    <div className="courses">
      <div className="courses_btns">
        <button onClick={() => {getCurrency(currency.rub); setCurrencyInLi('рубль')}} className="btn btn-outline-success">Рубли</button>
        <button onClick={() => {getCurrency(currency.usd); setCurrencyInLi('доллар')}} className="btn btn-outline-success">Доллары</button>
        <button onClick={() => {getCurrency(currency.eur); setCurrencyInLi('евро')}} className="btn btn-outline-success">Евро</button>
      </div>

      <div className="courses_list">
        {Object.entries(listCurrency).map(([currency, val]) => (
            <ul key={currency} className="list-group list-group-horizontal-lg">
              <li className="list-group-item">1 {currencyInLi} равен</li>
              <li className="list-group-item">{val}</li>
              <li className="list-group-item">{currency}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Courses;
