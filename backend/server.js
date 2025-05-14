// const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const express = require("express");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
console.log(process.env.MONGO_URI);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
