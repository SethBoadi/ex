// src/components/Exchange.js
import React, { useState } from 'react';
import axios from 'axios';

const Exchange = () => {
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState(null);

  const handleExchange = async (currency) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`/api/exchange/${currency}`, { amount }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setOrder(response.data); // Set the order state
  };

  const fetchPrice = async (currency) => {
    const response = await axios.get(`/api/price/${currency}`);
    setPrice(response.data.price); // Set the price state
  };

  return (
    <div>
      <h2>Exchange e-Cash for Cryptocurrency</h2>
      <button onClick={() => fetchPrice('btc')}>Get Current BTC Price</button>
      <button onClick={() => fetchPrice('eth')}>Get Current ETH Price</button>
      {price && <p>Current Price: {price} USD</p>}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // Use setAmount to update state
        placeholder="Enter amount in USD"
      />
      <button onClick={() => handleExchange('btc')}>Exchange for BTC</button>
      <button onClick={() => handleExchange('eth')}>Exchange for ETH</button>
      {order && 
      // This comment should be inside curly braces
      <p>Order ID: {order.txid}</p>
    }
  </div>
);
};

export default Exchange;
