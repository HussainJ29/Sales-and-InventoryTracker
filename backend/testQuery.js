import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// MongoDB connection (if not already in app.js)
mongoose.connect('mongodb+srv://hussain29:Hussain2902@cluster0.1q5i1.mongodb.net/inventory?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// GET all orders
router.get('/', async (req, res) => {
  try {
    // Direct database query
    const collection = db.collection('Orders');
    const orders = await collection.find({}).toArray();
    console.log('Orders from direct query:', orders);

    // Send the orders as the response
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
