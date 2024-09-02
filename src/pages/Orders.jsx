import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(response => response.json())
      .then(data => {
        console.log('Orders Data:', data);
        setOrders(data);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="container">
      <div className="orders-wrapper">
        <h2 className="orders-heading">Orders</h2>
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Expiry</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productId}</td>
                  <td>{order.productName}</td>
                  <td>${order.productPrice}</td>
                  <td>{new Date(order.productExpiry).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
