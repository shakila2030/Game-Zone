const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
  
  app.use(express.json());
  app.use(cors()); // Use the CORS middleware
  app.use('/users', userRoutes);
  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
