import React from "react";
import "../../public/CSS/style.css"

import ProductAccordianTemplate from "../Accordian/Accordian.Products";

function WatchesRow(){
    return(
        <div >
        <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="watches-row col-12"> {/** CSS should start here. Can't get row */}
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
            </div>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item6.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"pink watch"} description={"pink and white and petite"} />
                    </h3>
                    <span className="item-price text-primary">$870</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item7.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Heavy Watch"} description={"heavy duty use"} />
                    </h3>
                    <span className="item-price text-primary">$680</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item8.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Spotted Watch"} description={"It's actually sweat holes"} />
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item9.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Black Watch"} description={"Black and blacker"} />
                    </h3>
                    <span className="item-price text-primary">$650</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item10.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Smart Watch"} description={"smartest watch available"} />
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>

    </div>
    )
};
export default WatchesRow;