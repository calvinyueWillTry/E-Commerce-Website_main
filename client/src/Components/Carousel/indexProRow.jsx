import React from "react";
import "../../public/CSS/style.css"
import DropdownProductReview from "../Accord.Modal";
import ReviewForm from "../Accordian/reviewForm";//nothing wrong here
import ProductAccordianTemplate from "../Accordian/Accordian.Products";
import ProductItemization from '../../Pages/Process.Products.jsx/DynamicProducts'; //Error: Response not successful: Received status code 500
/**
 * [1] AggregateError [ECONNREFUSED]: 
[1]     at internalConnectMultiple (node:net:1116:18)
[1]     at internalConnectMultiple (node:net:1184:5)
[1]     at afterConnectMultiple (node:net:1683:7)
 */

function WatchesRow(){ 
    return(
        <div>
        <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container-fluid"> {/**products and carousel tied in here */}
        <div className="watches-row col-12"> {/** CSS should start here. Can't get row */}
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="title-text display-7 text-dark text-uppercase">Smart Watches</h2>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide"> {/** add rows */}
                <div className="row product-card position-relative">
                  <div className="row image-holder">
                    <img src="/src/public/images/product-item6.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"pink watch"} description={"pink and white and petite"} />
                      

                    </h3> {/** change cart button to be right next to the price */}
                  <div>
                    <span className="item-price text-primary">$870</span>
                    <div className="cart-concern ">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  </div>    
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row product-card position-relative">
                  <div className="row image-holder">
                    <img src="/src/public/images/product-item7.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Heavy Watch"} description={"heavy duty use"} />
                    </h3>
                  <div>
                    <span className="item-price text-primary">$680</span>
                    <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  </div>  
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row product-card position-relative">
                  <div className="row image-holder">
                    <img src="/src/public/images/product-item8.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Spotted Watch"} description={"It's actually sweat holes"} />
                    </h3>
                  <div>  
                    <span className="item-price text-primary">$750</span>
                    <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row product-card position-relative">
                  <div className="row image-holder">
                    <img src="/src/public/images/product-item9.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Black Watch"} description={"Black and blacker"} />
                    </h3>
                  <div>
                    <span className="item-price text-primary">$650</span>
                    <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row product-card position-relative">
                  <div className="row image-holder">
                    <img src="/src/public/images/product-item10.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  
                  <p></p>
                  <div className="card-detail d-flex justify-content-between pt-3">
                    <h3 className="card-title text-uppercase">
                      <ProductAccordianTemplate header={"Smart Watch"} description={"smartest watch available"} />
                    </h3>
                  <div>
                    <span className="item-price text-primary">$750</span>
                    <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="swiper-pagination position-absolute text-center"></div>
      <ProductItemization/> {/** not coming through */}
    </section>

    </div>
    )
};
export default WatchesRow;