import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './converter.css';
const apiKey = '18585d0d3a6b8701388a2844';

function Converter() {

  const [convertCurrency, setConvertCurrency] = useState('');
  const [textInput, setTextInput] = useState('');
  const [myVal, setMyVal] = useState('');
  const [listCurrency, setListCurrency] = useState({});


  const findValueForConvert = (obj, val) => {
    const newValue = Object.entries(obj).find(([key]) => key === val);
    return newValue[1];
  };

  const getCourse = (number, from, to) => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
      .then(data => {
        const valueToConvert = findValueForConvert(data.data.conversion_rates, to);
        const result = (valueToConvert * number).toFixed(2);
        setConvertCurrency(result);
      })
      .catch(() => setConvertCurrency('Ошибка получения курса'));
  };

  const getCurrency = currency => {
    if (Object.entries(listCurrency).length !== 0) {
      setListCurrency({})
    } else {
      axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
      .then(res => {
        setListCurrency(res.data.conversion_rates);
      })
      .catch(() => setListCurrency({ 'Валюты не найдены': '' }));
    }
  };

  const getTextInput = () => {
    const newStr = textInput.replace(/[^a-zA-Z0-9]/gi, '');
    const numCourse = Number(newStr.replace(/\D+/, ''));
    const fromCurrency = newStr.slice(-8, -5);
    const toCurrency = newStr.slice(-3).toUpperCase();
    setMyVal(toCurrency)
    getCourse(numCourse, fromCurrency, toCurrency);
  };

  const onKeyDown = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      getTextInput();
    }
  };

  return (
    <div className = "convert_area">
      <div className="convert_el">Введите строковое значение:</div>
      <input 
        className="form-control convert_el"
        type='text' 
        value = {textInput}
        onChange={event => setTextInput(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder='15 USD in RUB'
      />

      <div className="convert_el">
        {convertCurrency}<span> </span>{myVal}
      </div>

      <button onClick={() => getTextInput()} className="btn btn-outline-success">Рассчитать</button>
      <button onClick={() => getCurrency('RUB')} className="btn btn-outline-success">Доступные валюты</button>

       {Object.entries(listCurrency).length === 0 ? '' : Object.entries(listCurrency).map(([currency]) => (
        <ul key={currency} className="list-group list-group-horizontal-lg">
          <li className="list-group-item">{currency}</li>
        </ul>
      ))} 
    </div>
  );
}

export default Converter;
