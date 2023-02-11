import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_To_Cart, globalQuantity } from "../../redux/Actions";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import './details.css'

const Details = () => {
    const navigate = useNavigate();
    const showAdded = () => {
        document.getElementsByClassName('added')[0].classList.remove('hide-added');
    }
    const addToCart = (data, quantity) => {
        showAdded();
        dispatch(add_To_Cart(data, quantity));
        dispatch(globalQuantity(quantity));
    }
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    const productDetail = (detail) => {
        localStorage.setItem('detail', detail);
        update === false ? setUpdate(true) : setUpdate(false);
    }
    const [quantity, setQuantity] = useState(1);
    const detailName = localStorage.getItem('detail');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('./data.json').then(res => setData(res.data));
        window.scrollTo(0, 0);
    }, [update])

    const details =
        data.map((ele, index) => {
            return ele.slug === (detailName) ? <article className='article detail' key={ele.id}>
                <img src={`../../.${ele.image.mobile}`} />
                <div className="article-content article-detail">
                    {ele.new === true ? <p className="new-product">NEW PRODUCT</p> : ''}
                    <h2 className="article-name">{ele.name}</h2>
                    <p className="article-description">{ele.description}</p>
                    <span className="price">${ele.price / 1000}</span>
                    <div className="detail-btns">
                        <div className="btn-add">
                            <button onClick={() => quantity > 1 ? setQuantity(q => q - 1) : ''}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>
                        <button className="add-to-cart" onClick={() => { addToCart(ele, quantity) }}>ADD TO CART</button>
                    </div>
                </div>
            </article> : ''
        })
    const features = data.map((ele, index) => {
        return ele.slug === (detailName) ?
            <div className="details-content" key={ele.id}>
                <div className="features">
                    <h2>FEATURES</h2>
                    <p>{ele.features}</p>
                </div>
                <div className="includes">
                    <h2>IN THE BOX</h2>
                    <div className="includes-content">
                        {ele.includes.map((e) => {
                            return (
                                <div className="in-the-box">
                                    <span className="inc-quantity">{`${e.quantity}x `}</span>
                                    <span className="item">{e.item}</span>
                                </div>
                            )
                        })}</div>
                </div>
            </div>
            : ''
    })
    const gallery = data.map((ele, index) => {
        return ele.slug === (detailName) ?
            <div className="gallery" key={ele.id}>
                <div className="gallery-part one">
                    <img src={`../../.${ele.gallery.first.desktop}`} />
                    <img src={`../../.${ele.gallery.second.desktop}`} />
                </div>
                <div className="gallery-part">
                    <img src={`../../.${ele.gallery.third.desktop}`} />
                </div>
            </div>
            : ''
    })
    const others = <div className="others">
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="others-boxes">
            {data.map((ele, index) => {
                return ele.slug === (detailName) ?
                    ele.others.map((e, ind) => {
                        return (
                            <div className="others-box" key={ind}>
                                {window.innerWidth > parseInt('991px') ? <img src={`../../.${e.image.desktop}`} /> : <img src={`../../.${e.image.mobile}`} />}
                                <h3>{e.name}</h3>
                                <button className="see-product" onClick={() => productDetail(e.slug)}>SEE PRODUCT</button>
                            </div>
                        )
                    })
                    : ''
            })}
        </div>
    </div>
    return (
        <main className="details">
            <div className="container">
                <button className="btn-back" onClick={() => navigate(-1)}>Go Back</button>
                {details}
                {features}
                {gallery}
                {others}
            </div>
            <Products />
            <About />
            <Footer />
        </main>
    )
}
export default Details;