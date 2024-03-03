import React from 'react';


function Itemcard() {
  return (
    <>
       <div className="card" style={{ width: '18rem' }}>
      <img src="https://www.balaconbar.com/us/142/pidwebp600/33/f132846676788580850048-1.webp" className="card-img-top" alt="ürünün resmi" />
      <div className="card-body">
        <h5 className="card-title">ürünün adı </h5>
        <h5 className="card-title">ürünün fiyatı</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    </>
  );
}

export default Itemcard;
