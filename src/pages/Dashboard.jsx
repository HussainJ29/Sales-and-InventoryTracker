import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero-img.jpg'; // Import your image from assets
import contact from '../assets/contact.jpg'
import support from '../assets/support.jpg'
import order from '../assets/order.jpg'

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Section 1: Image and Buttons */}
      <section className="hero-section">
        {/* Left Side: Hero Image */}
        <div className="hero-image-container">
          <img src={hero} alt="Hero" className="hero-image" />
        </div>

        {/* Right Side: Buttons */}
        <div className="hero-content">
          <button className="dashboard-btn" onClick={() => navigate('/products')}>
            Products
          </button>
          <button className="dashboard-btn" onClick={() => navigate('/take-order')}>
            Take Order
          </button>
        </div>
      </section>

      {/* Section 2: Cards for Contact Us, Support, Today's Orders */}
      <section className="cards-section">
      <div className="card">
          <img src={contact} alt="Contact Us" className="card-image" />
          <h3>Contact Us</h3>
          <p>Reach out for support and more information.</p>
        </div>
        <div className="card">
          <img src={support} alt="Support" className="card-image" />
          <h3>Support</h3>
          <p>We are available 24/7 for your support needs.</p>
        </div>
        <div className="card">
          <img src={order} alt="Today's Orders" className="card-image" />
          <h3>Today's Orders</h3>
          <p>Check and manage all orders placed today.</p>
        </div>
      </section>

      {/* Section 3: Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Inventory Management. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </footer>
    </div>
  );
};

export default Dashboard;
