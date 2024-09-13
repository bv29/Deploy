const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the website');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
