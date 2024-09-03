import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, employeeCode, salesRegion, phoneNumber, address, email, password } = req.body;

  try {
    // Check if the user already exists with the same email, employee code, or phone number
    const existingUser = await User.findOne({
      $or: [
        { email: email },
        { employeeCode: employeeCode },
        { phoneNumber: phoneNumber },
      ],
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with the same email, employee code, or phone number.' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      employeeCode,
      salesRegion,
      phoneNumber,
      address,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { employeeCode, password } = req.body;

  try {
    // Check if the user exists by employeeCode
    const user = await User.findOne({ employeeCode });
    if (!user) {
      return res.status(404).json({ message: 'Employee ID not found. Please sign up.' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials. Please try again.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Return the token and user details (excluding the password)
    res.json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        employeeCode: user.employeeCode,
        salesRegion: user.salesRegion,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
