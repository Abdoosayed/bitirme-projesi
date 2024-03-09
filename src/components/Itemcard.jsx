import React from 'react';

function Itemcard(props) {
  const { item } = props; // استخراج العنصر من الـ props
  return (
    <div className="card" style={{ width: '14rem' }}>
      <img src="https://www.balaconbar.com/us/142/pidwebp600/33/f132846676788580850048-1.webp" className="card-img-top" alt={item.URUNADI} />
      <div className="card-body">
        <h6 className="card-title">Şube: {item.SUBEADI}</h6>
        <h6 className="card-title">Kategori: {item.KATEGORIADI}</h6>
        <h6 className="card-title">Ürün Adı: {item.URUNADI}</h6>
        <h6 className="card-title"> Fiyat: {item.FIYAT}</h6>
        <h6 className="card-title">{item.URUNNOTU}</h6>
      </div>
    </div>
  );
}

export default Itemcard;
