import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './converter.css'

function Converter() {

  const [convertCurrency, setConvertCurrency] = useState('');
  const [textInput, setTextInput] = useState('');

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
      .catch(() => setConvertCurrency('Error. Please, try again'));
  };

  const getTextInput = () => {
    const newStr = textInput.replace(/[^a-zA-Z0-9]/gi, '');
    const numCourse = Number(newStr.replace(/\D+/, ''));
    const fromCurrency = newStr.slice(-8, -5);
    const toCurrency = newStr.slice(-3).toUpperCase();
    getCourse(numCourse, fromCurrency, toCurrency);
  };

  const onKeyDown = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      getTextInput();
    }
  };


  return (
    <div>
    <input type='text' value = {textInput} onChange={event => setTextInput(event.target.value)} />
      {convertCurrency}
    </div>
  );
}

export default Converter;
