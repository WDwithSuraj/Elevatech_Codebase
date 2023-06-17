import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './payment.css';
// import { clearCart, makePayment } from '../Redux/Cart/action';
// import { Button } from '@chakra-ui/react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [deliveryAmt, setDeliveyAmt] = useState(0)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // let { cart, subtotal, discountTotal } = useSelector((store) => store.cartReducer)

  // if (cart) {
  //   for (let i = 0; i < cart.length; i++) {
  //     subtotal += cart[i].o_price;
  //     discountTotal += cart[i].price;
  //   }
  //   if (subtotal < 3999) {
  //     setDeliveyAmt(99)
  //   }
  // }
  // if (cart.length === 0) {
  //   subtotal = 0;
  //   discountTotal = 0;
  // }
  // const handlePayment = () => {
  //   dispatch(makePayment(paymentMethod));
  //   clearCart(dispatch)
  //   navigate('/');
  //   alert("Order successfull")
  // };

  return (
    <div className="payment-page">
      {/* <Button colorScheme="teal" >Payment</Button> */}
      <div className="payment-options">
        <h1>Select Payment Method</h1>
        <div className="wallet-option">
          <img src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png" alt="wallet icon" />
          <div className="wallet-details">
            <h3>Wallet</h3>
            <p>Get 5% cashback on all purchases</p>
          </div>
          <input
            type="radio"
            id="wallet"
            name="paymentMethod"
            value="wallet"
            checked={paymentMethod === 'wallet'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="credit-card-option">
          <img src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png" alt="credit card icon" />
          <div className="credit-card-details">
            <h3>Credit Card</h3>
            <p>Get 10% cashback on all purchases</p>
          </div>
          <input
            type="radio"
            id="credit-card"
            name="paymentMethod"
            value="credit-card"
            checked={paymentMethod === 'credit-card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="credit-card-option">
          <h1>COD</h1>
          <div className="credit-card-details">
            <h3>Cash On Delivery</h3>
            <p>Get 0% cashback on all purchases</p>
          </div>
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <button className="pay-now-btn" >
          Checkout
        </button>
      </div>
      <div className="price-details">
        <h2>Price Details</h2>
        <div className="cart-value">
          <p>Cart Value:</p>
          <p>Rs. { }</p>
        </div>
        <div className="delivery-charge">
          <p>Delivery Charge:</p>
          <p>Rs. {deliveryAmt} </p>
        </div>
        <hr />
        <div className="total-price" style={{ fontWeight: "bold" }}>
          <p>Total Price:</p>
          <p>Rs. {(deliveryAmt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
