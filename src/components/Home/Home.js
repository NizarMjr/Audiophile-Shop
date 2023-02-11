import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import SpeakersHome from "../SpeakersHome/SpeakersHome";
import './home.css'

const Home = () => {
    return (
        <>
            <main className="main-home">
                <div className="home container">
                    <article className="description">
                        <p className="feature">NEW PRODUCT</p>
                        <h2 className="title">XX99 MARK II HEADPHONES</h2>
                        <p className="info">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Link to='/details'>
                            <button className="see-product" onClick={() => { localStorage.setItem('detail', 'xx99-mark-two-headphones') }}>SEE PRODUCT</button>
                        </Link>
                    </article>
                    <div className="image">
                    </div>
                </div>
            </main>
            <Products />
            <SpeakersHome />
            <About />
            <Footer />
        </>
    )
}
export default Home;