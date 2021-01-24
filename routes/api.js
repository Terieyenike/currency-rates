const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  res.send('<p>running exchange API rates service. Check its endpoint</p>');
});

router.get('/rates', async (req, res) => {
  const { currency, base } = req.query;
  try {
    const proxyRequest = await fetch(
      `https://api.exchangeratesapi.io/latest?${base ? `base=${base}` : ''}${
        base && currency ? '&' : ''
      }${currency ? `symbols=${currency}` : ''}`
    );
    const results = await proxyRequest.json();
    res.json({ results });
  } catch (err) {
    res
      .status(500)
      .json({ err: 500, message: 'something went wrong. Please check...' });
  }
});

router.get('*', (req, res) => {
  res.status(404).json({
    error: 404,
    message: "Error loading this page. Page doesn't exist",
  });
});

module.exports = router;
