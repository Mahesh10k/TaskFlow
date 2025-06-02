require('dotenv').config();
const connectDB = require('./config/database');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const timeRoutes = require('./routes/time');
const errorHandler = require('./middleware/errorHandler');
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({extended:true}))


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/time', timeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
