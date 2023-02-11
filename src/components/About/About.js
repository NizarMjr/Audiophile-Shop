import React from "react";
import './about.css'

const About = () => {
    return (
        <div className="container">
            <article className="about">
                <div className="about-content">
                    <p className="title">BRINGING YOU THE <span>BEST </span>AUDIO GEAR</p>
                    <p className="info">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <picture>
                    <source srcSet="../../../assets/shared/tablet/image-best-gear.jpg" media="(max-width:992px)" />
                    <source srcSet="../../../assets/shared/mobile/image-best-gear.jpg" media="(max-width:478px)" />
                    <img src="../../../assets/shared/desktop/image-best-gear.jpg" />
                </picture>
            </article>
        </div>
    )
}
export default About;