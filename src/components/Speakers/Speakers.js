import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import './speakers.css'

const Speakers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('./data.json').then(res => setData(res.data)).catch(err => console.log(err.message));
        window.scrollTo(0, 0);
    }, [])

    const productDetail = (detail) => {
        localStorage.setItem('detail', detail);
    }
    const speakers = data.map((ele) => {
        return ele.category === 'speakers' ? <article className={`article ${ele.id % 2 === 0 ? 'reverse' : ''}`} >
            <img src={`../../.${ele.categoryImage.tablet}`} srcSet={`../../.${ele.categoryImage.mobile} 1280w, ${`../../.${ele.categoryImage.tablet}`} 991w, ${`../../..${ele.categoryImage.desktop}`} 478w`} />
            <div className="article-content">
                {ele.new === true ? <p className="new-product">NEW PRODUCT</p> : ''}
                <h2 className="article-name">{ele.name}</h2>
                <p className="article-description">{ele.description}</p>
                <Link to='/details'><button className="article-btn" onClick={() => productDetail(ele.slug)}>SEE PRODUCT</button></Link>
            </div>
        </article> : '';
    })
    return (
        <main className="main">
            <div className="page-title">
                <h2>SPEAKERS</h2>
            </div>
            <main className="page">
                <div className="container">
                    {speakers}
                </div>
            </main>
            <Products />
            <About />
            <Footer />
        </main>


    )
}
export default Speakers;