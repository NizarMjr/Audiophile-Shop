import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../redux/Actions";
import './checkout.css'

const Checkout = () => {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const global_Quantity = useSelector(state => state.globalQuantity);
    const dispatch = useDispatch();
    var total = 0;

    useEffect(() => {
        const updatedCart = cart.filter((ele) => {
            if (ele.quantity !== 0) return ele;
        })
        dispatch(updateCart(updatedCart))
        if (global_Quantity === 0) document.getElementsByClassName('pay')[0].style.cssText = 'opacity:.5;cursor:not-allowed';
    }, [global_Quantity])

    const summary = <div className="summary">
        <h2>SUMMARY</h2>
        {cart.length !== 0 ? cart.map((ele) => {
            total += ele.data.price / 1000 * ele.quantity;
            return (
                ele.quantity !== 0 ? <div className="summary-content">
                    <img src={`../../.${ele.data.image.mobile}`} />
                    <div className="content-info">
                        <p>{ele.data.name}</p>
                        <span>${(ele.data.price / 1000 * ele.quantity).toFixed(2)}</span>
                    </div>
                    <span className="summary-quantity">x{ele.quantity}</span>
                </div> : ''
            )
        }) : <p className="no-items">No Items In Cart</p>}

        <div className="summary-total">
            <p>TOTAL</p>
            <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-total shipping">
            <p>SHIPPING</p>
            <span>{cart.length !== 0 ? '$0.5' : '$0'}</span>
        </div>
        <div className="summary-total vat">
            <p>VAT</p>
            <span>{cart.length !== 0 ? '$1.9' : '$0'}</span>
        </div>
        <div className="summary-total grand-total">
            <p>GRAND TOTAL</p>
            <span>${cart.length ? (total + 0.5 + 1.9).toFixed(2) : 0}</span>
        </div>
        <button className="pay">CONTINUE & PAY</button>
    </div>
    const setPaymentMethod = (cls) => {
        document.getElementsByClassName(cls)[0].classList.remove('none');
        if (cls === 'payment')
            document.getElementsByClassName('cash')[0].classList.add('none');
        else
            document.getElementsByClassName('payment')[0].classList.add('none');


    }
    return (
        <main className="checkout-part">
            <div className="container">
                <button className="btn-back" onClick={() => navigate(-1)}>Go Back</button>
                <div className="checkout">
                    <div className="form">
                        <h2>Checkout</h2>
                        <div className="billing-details">
                            <h4 className="sum-title">Billing Details</h4>
                            <form >
                                <div>
                                    <label>Name</label>
                                    <input type='text' placeholder="Nizar Mejri" required />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type='email' placeholder="nizar@mail.com" required />
                                </div>
                                <div>
                                    <label>Number</label>
                                    <input type='tel' placeholder="+216 20438141" required />
                                </div>
                            </form>
                        </div>
                        <div className="shipping-info">
                            <h4 className="sum-title">SHIPPING INFO</h4>
                            <form>
                                <div className="one">
                                    <label>Your Address</label>
                                    <input type='text' placeholder="Avenue tunis" required />
                                </div>
                                <div className="two">
                                    <label>ZIP Code</label>
                                    <input type='tel' placeholder="2076" required />
                                </div>
                                <div className="three">
                                    <label>City</label>
                                    <input type='text' placeholder="Tunis" required />
                                </div>
                                <div className="four">
                                    <label>Country</label>
                                    <input type='text' placeholder="Tunisia" required />
                                </div>
                            </form>
                        </div>
                        <div className="payment-details">
                            <h4 className="sum-title">PAYMENT DETAILS</h4>
                            <form >
                                <label>Payment Method</label>
                                <fieldset className="checkbox-part" style={{ border: "none" }}>
                                    <div>
                                        <input type='radio' id='radio-one' name="input" className="radio" defaultChecked onClick={() => setPaymentMethod('payment')} />
                                        <span>e-Money</span>
                                    </div>
                                    <div>
                                        <input type='radio' id='radio-two' name="input" className="radio" onClick={() => setPaymentMethod('cash')} />
                                        <span>Cash on Delivery</span>
                                    </div>
                                </fieldset>
                            </form>
                            <form className="payment">
                                <div className="e-money">
                                    <label>e-Money Number</label>
                                    <input type='tel' placeholder="123456789" />
                                </div>
                                <div>
                                    <label>e-Money PIN</label>
                                    <input type='tel' placeholder="1234" required />
                                </div>
                            </form>
                            <div className="cash none">
                                <div>
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A" /></svg>
                                </div>
                                <p>
                                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </p>
                            </div>
                        </div>
                    </div>
                    {summary}
                </div>
            </div>
        </main>
    )
}
export default Checkout;