import React from 'react';

function Itemcard(props) {
  const { item } = props; // استخراج العنصر من الـ props
  return (
    <div className='col-sm mb-3'>
    <div className="card" >
      <img src="https://www.balaconbar.com/us/142/pidwebp600/33/f132846676788580850048-1.webp" className="card-img-top" alt={item.URUNADI} />
      <div className="card-body">
        <h6 className="card-title">Şube: <p>{item.SUBEADI}</p></h6>
        <h6 className="card-title">Kategori: <p>{item.KATEGORIADI}</p></h6>
        <h6 className="card-title">Ürün Adı: <p>{item.URUNADI}</p></h6>
        <h6 className="card-title"> Fiyat: <p>{item.FIYAT}</p></h6>
        <p className="card-title">{item.URUNNOTU}</p>
      </div>
    </div>
    </div>
  );
}

export default Itemcard;
