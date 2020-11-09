import React from 'react';

function Home(){
    return(
        <div>
          <div className="add-to-cart">
            <img src="https://icons-for-free.com/iconfiles/png/512/add+to+cart+cart+shopping+cart+shopping+cart+icon+icon-1320073116171330767.png"></img>
          </div>
          <h1>Home Component</h1>
          <div className="cart-wrapper">
            <div className="img-wrapper item">
              <img src="https://images-na.ssl-images-amazon.com/images/I/712Ex7xDndL._SL1500_.jpg" />
            </div>
            <div className="text-wrapper item">
              <span>
                I-Phone
              </span>
              <span>
                Price: $1000.00
              </span>
            </div>
            <div className="btn-wrapper item">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
    );
}

export default Home;