import './App.css';
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

const products = [
  {
    id: 1,
    productHeader: "ürün 1",
    productImage: "../images/product-1-1.jpg",
    productPrice: "100 TL",
  },
  {
    id: 2,
    productHeader: "ürün 2",
    productImage: "../images/product-2-1.jpg",
    productPrice: "150 TL",
  },
  {
    id: 3,
    productHeader: "ürün 3",
    productImage: "../images/product-3-1.jpg",
    productPrice: "200 TL",
  },
  {
    id: 4,
    productHeader: "ürün 4",
    productImage: "../images/product-4-1.jpg",
    productPrice: "250 TL",
  },
  {
    id: 5,
    productHeader: "ürün 5",
    productImage: "../images/product-5-1.jpg",
    productPrice: "300 TL",
  },
  {
    id: 6,
    productHeader: "ürün 6",
    productImage: "../images/product-1-1.jpg",
    productPrice: "300 TL",
  },
];

const App = () => {
  //GET           SET                    İLK DEĞER
  const [sepetListesi, setSepetListesi] = useState([]);
  const [sepetToplam, setSepetToplam] = useState(0);
  const sepetUrunEkle = (newProduct) => {
    var varMi = sepetListesi.filter(basket => basket.product.id === newProduct.id);
    var total = 0;
    if (varMi.length === 0) {
      setSepetListesi(
        [...sepetListesi, {
          product: newProduct,
          productCount: 1,
          totalPrice: parseFloat(newProduct.productPrice),
        }]
      )

      sepetListesi.forEach(item => {
        total = total + item.totalPrice
      })
      setSepetToplam(total + parseFloat(newProduct.productPrice))
    } else {
      var newBasketList = []
      sepetListesi.forEach(basket => {
        if (basket.product.id === newProduct.id) {
          newBasketList.push({
            product: varMi[0].product,
            productCount: varMi[0].productCount + 1,
            totalPrice: (varMi[0].productCount + 1) * parseFloat(newProduct.productPrice),
          })
        }
        else {
          newBasketList.push(basket)
        }
      })

      setSepetListesi(
        newBasketList
      )
      total = 0;
      newBasketList.forEach(item => {
        total = total + item.totalPrice
      })
      setSepetToplam(total)
    }
  }

  const productDelete = (id) => {
    var deleteBasketList = []
    sepetListesi.forEach(basket => {
      if (basket.product.id !== id) {
        deleteBasketList.push(basket)
      }
    })
    setSepetListesi(deleteBasketList);
    var total = 0;
    deleteBasketList.forEach(item => {
      total = total + item.totalPrice
    })
    setSepetToplam(total)
  }

  const basketAllDelete = () => {
    setSepetListesi([])
    setSepetToplam(0)
  }




  return (
    <div>
      <BrowserRouter>
        <Header sepetListesi={sepetListesi} productDelete={productDelete} basketAllDelete={basketAllDelete} sepetToplam={sepetToplam} />
        <Content sepetUrunEkle={sepetUrunEkle} products={products} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;