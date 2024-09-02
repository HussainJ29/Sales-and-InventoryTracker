import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// GET all orders
router.get('/', async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection('Orders');
    const orders = await collection.find({}).toArray();
    
    console.log('Orders from direct query:', orders); // This should log the orders

    res.json(orders); // Send the orders back as the response
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ message: err.message });
  }
});

export default router;
