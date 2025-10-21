const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Testowy endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API Veritas Local działa poprawnie!', status: 'SUCCESS' });
});

// Start serwera
app.listen(PORT, () => {
  console.log(`🚀 Serwer Veritas Local działa na porcie ${PORT}`);
  console.log(`📡 API dostępne pod: http://localhost:${PORT}/api/test`);
});