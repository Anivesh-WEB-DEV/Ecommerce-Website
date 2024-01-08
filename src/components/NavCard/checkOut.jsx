import React, { useState } from "react";
import Example from "./PopUp";
const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const isFormValid = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsButtonDisabled(!isFormValid);
  };
  const popUp = () => {
    return <Example />;
  };
  return (
    <>
      <button onClick={() => popUp()}>hyhy</button>
      <h1 style={{ fontSize: "30px" }}>Checkout</h1>
      <div style={checkoutStyle}>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              style={inputStyle}
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              style={inputStyle}
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              style={inputStyle}
              onChange={handleChange}
              value={formData.address}
            />
          </label>
          <label>
            Credit Card Number:
            <input
              type="text"
              name="cardNumber"
              style={inputStyle}
              onChange={handleChange}
              value={formData.cardNumber}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              style={inputStyle}
              onChange={handleChange}
              value={formData.expiryDate}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              style={inputStyle}
              onChange={handleChange}
              value={formData.cvv}
            />
          </label>
          <button type="submit" style={buttonStyle} disabled={isButtonDisabled}>
            Place Order
          </button>
        </form>
        {isButtonDisabled && (
          <div style={{ color: "red", marginTop: "10px" }}>
            Please fill in all details before placing the order.
          </div>
        )}
      </div>
      <button onClick={() => popUp()}>Cancel</button>
    </>
  );
};
export default Checkout;
