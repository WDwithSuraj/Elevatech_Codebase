import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./payment.css"
import { clearcartaction } from '../redux/action';
import Swal from 'sweetalert2';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [deliveryAmt] = useState(40)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartAmount = useSelector((store) => store.cartReducer.cartAmount)


  const handleplaceorder = () => {
    Swal.fire(
      'Good job!',
      'Product Added to cart',
      'success'
    )
    dispatch(clearcartaction())
    navigate("/")
  }


  return (
    <div className="payment-page">
      {/* <h1>{cartAmount}</h1> */}
      {/* <Button colorScheme="teal" >Payment</Button> */}
      <div className="payment-options">
        <h1>Select Payment Method</h1>
        <div className="wallet-option">
          <img className='payersImg' src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png" alt="wallet icon" />
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
          <img className='payersImg' src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png" alt="credit card icon" />
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
        <button onClick={handleplaceorder} className="pay-now-btn" >
          Place Order
        </button>
      </div>
      <div className="price-details">
        <h2>Price Details</h2>
        <div className="cart-value">
          <p>Cart Value:</p>
          <p>Rs. {cartAmount}</p>
        </div>
        <div className="delivery-charge">
          <p>Delivery Charge:</p>
          <p>Rs.{cartAmount !== 0 ? deliveryAmt : 0}</p>
        </div>
        <hr />
        <div className="total-price" style={{ fontWeight: "bold" }}>
          <p>Total Price:</p>
          <p style={{ fontSize: "22px" }}>Rs. {(cartAmount + deliveryAmt)}</p>
        </div>
      </div>
    </div>

  );
};

export default Payment;
