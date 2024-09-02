import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center text-center">
        <div className="text-white text-2xl font-bold">
          Inventory Management
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/orders" className="text-white hover:text-gray-200">Orders</a>
          </li>
          <li>
            <a href="/products" className="text-white hover:text-gray-200">Products</a>
          </li>
          <li>
            <a href="/login" className="text-white hover:text-gray-200">Login</a>
          </li>
          <li>
            <a href="/signup" className="text-white hover:text-gray-200">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
