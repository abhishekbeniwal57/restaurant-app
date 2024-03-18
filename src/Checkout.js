// Checkout.js
import React from 'react';

const Checkout = ({ cart, totalPrice }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {/* Add checkout form and process here */}
    </div>
  );
};

export default Checkout;
