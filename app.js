const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

// import routes
const resultsRoutes = require('./routes/api');
app.use('/api', resultsRoutes);

app.get('/', (req, res) => {
  res.send('<p>Currency rates API. Use the /api/rates endpoint.</p>');
});

app.get('*', (req, res) => {
  res.status(404).json({
    error: 404,
    message: "Error loading this page. Page doesn't exist'",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(`${PORT}`, () => {
  console.log(`app listening on port:${PORT}`);
});
