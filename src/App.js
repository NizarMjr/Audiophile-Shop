import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Headphones from './components/Headphones/Headphones';
import Earphones from './components/Earphones/Earphones';
import Speakers from './components/Speakers/Speakers';
import Details from './components/Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai'
import { GiConfirmed } from 'react-icons/gi';
import { globalQuantity, restartShop, updateCart, updateGlobalQuantity } from './redux/Actions';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout/Checkout';
function App() {

  const cart = useSelector(state => state.cart)
  const global_Quantity = useSelector(state => state.globalQuantity);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    let value = 0;
    cart.forEach((ele) => {
      value += ele.data.price / 1000 * ele.quantity;
      setTotal(value);
    })
  }, [global_Quantity])

  useEffect(() => {
    if (document.getElementsByClassName('added')[0].classList.contains('hide-added') === false)
      setTimeout(() => {
        return document.getElementsByClassName('added')[0].classList.add('hide-added')
      }, 2000)
    if (document.getElementsByClassName('empty')[0].classList.contains('hide-added') === false)
      setTimeout(() => {
        return document.getElementsByClassName('empty')[0].classList.add('hide-added')
      }, 2000)
  })

  const clearCart = () => {
    dispatch(globalQuantity(0));
    dispatch(restartShop());
    document.getElementsByClassName('empty')[0].classList.remove('hide-added');
  }
  const hideAdded = () => {
    document.getElementsByClassName('added')[0].classList.add('hide-added');
    document.getElementsByClassName('empty')[0].classList.add('hide-added');

  }
  const changeQuantity = (sign, id) => {
    const obj = {
      'data': [],
      'quantity': 0,
    }
    var quantityValue = 0;

    // UPDATE CART SHOP AND GLOBAL QUANTITY
    const arr = cart.map((ele) => {
      quantityValue += ele.quantity;
      if (ele.data.id === id) {
        if (sign === '-') {
          obj.quantity = ele.quantity - 1;
          quantityValue--;
        }
        else {
          obj.quantity = ele.quantity + 1;
          quantityValue++;
        }
        obj.data = ele.data;
        return obj;
      }
      else return ele;
    })

    dispatch(updateGlobalQuantity(quantityValue));
    dispatch(updateCart(arr));
  }
  const goToCheckout = () => {
    document.getElementsByClassName('body-cart')[0].classList.add('none');
    document.getElementsByClassName('cart')[0].classList.add('none');
  }

  const cartContent = cart.map((ele, index) => {
    return (
      ele.quantity > 0 ? <div className='cart-boxes' key={index}>
        <div className='cart-box'>
          <div className='cart-box-content'>
            <img src={`../${ele.data.image.mobile}`} alt={ele.name} />
            <div className='box-content'>
              <h4>{ele.data.slug}</h4>
              <span>${ele.data.price / 1000}</span>
            </div>
          </div>
          <div className="cart-btn-add">
            <button onClick={ele.quantity > 0 ? () => { changeQuantity('-', ele.data.id) } : ''}>-</button>
            <span className="quantity">{ele.quantity}</span>
            <button onClick={() => changeQuantity('+', ele.data.id)}>+</button>
          </div>
        </div>
      </div> : ''
    )
  })
  return (
    <>
      <BrowserRouter>
        <div className='body-cart none'>
        </div>
        <div className="cart none">
          {global_Quantity === 0 ?
            <><p>Your Cart Is Empty</p>
              <i><AiOutlineShoppingCart /></i></>
            : <><div className='cart-content'>
              <div className='cart-part-one'>
                <h2>Cart({global_Quantity})</h2>
                <button onClick={() => clearCart()}>Remove All</button>
              </div>
            </div>
              {cartContent}
              <div className='total'>
                <p>TOTAL</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link to='/checkout'><button className='checkout-btn' onClick={() => goToCheckout()}>CHECKOUT</button></Link>
            </>}
        </div>
        <div className='added hide-added'>
          <i><GiConfirmed /></i>
          <p>Item was added to cart</p>
          <i onClick={() => hideAdded()}><AiOutlineClose /></i>
        </div>
        <div className='empty added hide-added'>
          <i><GiConfirmed /></i>
          <p>Cart is empty</p>
          <i onClick={() => hideAdded()}><AiOutlineClose /></i>
        </div>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='headphones' exact element={<Headphones />} />
            <Route path='earphones' exact element={<Earphones />} />
            <Route path='speakers' exact element={<Speakers />} />
            <Route path='/checkout' exact element={<Checkout />} />
            <Route path='/details' exact element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
