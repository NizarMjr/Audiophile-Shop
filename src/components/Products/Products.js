import React from "react";
import { Link } from "react-router-dom";
import './products.css'

const Products = () => {
    return (
        <main className="products">
            <div className="container">
                <article className="product-sample">
                    <Link className="box" to="/headphones"><div>
                        <img src="../../../assets/shared/desktop/image-category-thumbnail-headphones.png" />
                        <div className="content">
                            <h4>HEADPHONES</h4>
                            <span className="shop">shop</span>
                        </div>
                    </div>
                    </Link>
                    <Link className="box" to="/speakers"><div>
                        <img src="../../../assets/shared/desktop/image-category-thumbnail-speakers.png" />
                        <div className="content">
                            <h4>SPEAKERS</h4>
                            <span className="shop">shop</span>
                        </div>
                    </div>
                    </Link>
                    <Link className="box" to="/earphones"><div>
                        <img src="../../../assets/shared/desktop/image-category-thumbnail-earphones.png" />
                        <div className="content">
                            <h4>EARPHONES</h4>
                            <span className="shop">shop</span>
                        </div>
                    </div>
                    </Link>
                </article>
            </div>
        </main>
    )
}
export default Products;