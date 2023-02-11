import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, setLink } from "../../redux/Actions";
import './speakersHome.css'

const Speakers = () => {
    return (
        <main className="speakers">
            <div className="container">
                <article className="speakers-content spk1">
                    <img src="../../../assets/home/desktop/image-speaker-zx9.png" alt="ZX9 SPEAKER picture" />
                    <div className="content">
                        <h2>ZX9 SPEAKER</h2>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Link to='/details'>
                            <button onClick={() => localStorage.setItem('detail', 'zx9-speaker')}>SEE PRODUCT</button>
                        </Link>
                    </div>
                </article>
                <article className="speakers-content spk2">
                    <div className="content">
                        <h2>ZX7 SPEAKER</h2>
                        <Link to='/details'>
                            <button onClick={() => localStorage.setItem('detail', 'zx7-speaker')}>SEE PRODUCT</button>
                        </Link>
                    </div>
                </article>
                <article className="earphone">
                    <picture>
                        <source srcSet="../../../assets/home/tablet/image-earphones-yx1.jpg" media="(max-width:991px)" />
                        <source srcSet="../../../assets/home/mobile/image-earphones-yx1.jpg" media="(max-width:478px)" />
                        <img src="../../../assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 EARPHONES" className="earphone-pic" />
                    </picture>
                    <div className="content">
                        <h2>YX1 EARPHONES</h2>
                        <Link to='/details'>
                            <button onClick={() => localStorage.setItem('detail', 'yx1-earphones')}>SEE PRODUCT</button>
                        </Link>
                    </div>
                </article>
            </div>
        </main>
    )
}
export default Speakers;