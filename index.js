const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const citiesRouter = require('./routes/cities');

dotenv.config();


// Connect DB
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},() => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Route middleware
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.use('/api/cities',citiesRouter);
app.use('/api/cities/{id}',citiesRouter);

app.listen(3000,()=> console.log(`Server Up and Running`));