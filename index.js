require('dotenv').config();

const express = require('express');
const cors = require('cors');
const currencyRouter = require('./routes/currency.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/currency', currencyRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
