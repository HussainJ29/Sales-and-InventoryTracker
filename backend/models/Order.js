import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productExpiry: { type: Date, required: true },
});

export default mongoose.model('Order', orderSchema);
