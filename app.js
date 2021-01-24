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
  res.send('<h3>enye phase 1.2: backend. Currency rates API</h3>');
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
