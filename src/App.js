import './App.css';
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

const products = [
  {
    id: 1,
    productHeader: "Product name 1",
    productImage: "../images/product-1-1.jpg",
    productPrice: "100 $",
  },
  {
    id: 2,
    productHeader: "Product name 2",
    productImage: "../images/product-2-1.jpg",
    productPrice: "150 $",
  },
  {
    id: 3,
    productHeader: "Product name 3",
    productImage: "../images/product-3-1.jpg",
    productPrice: "200 $",
  },
  {
    id: 4,
    productHeader: "Product name 4",
    productImage: "../images/product-4-1.jpg",
    productPrice: "250 $",
  },
  {
    id: 5,
    productHeader: "Product name 5",
    productImage: "../images/product-5-1.jpg",
    productPrice: "300 $",
  },
  {
    id: 6,
    productHeader: "Product name 6",
    productImage: "../images/product-1-1.jpg",
    productPrice: "300 $",
  },
];

const App = () => {
  //GET           SET                    İLK DEĞER
  const [basketList, setBasketList] = useState([]);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const addCartProduct = (newProduct) => {
    var productFilter = basketList.filter(basket => basket.product.id === newProduct.id);
    var totalBasketPrice = 0;
    if (productFilter.length === 0) {
      setBasketList(
        [...basketList, {
          product: newProduct,
          productCount: 1,
          totalPrice: parseFloat(newProduct.productPrice),
        }]
      )

      basketList.forEach(item => {
        totalBasketPrice = totalBasketPrice + item.totalPrice
      })

      setBasketTotalPrice(totalBasketPrice + parseFloat(newProduct.productPrice))
    } else {
      var newBasketList = []
      basketList.forEach(basket => {
        if (basket.product.id === newProduct.id) {
          newBasketList.push({
            product: productFilter[0].product,
            productCount: productFilter[0].productCount + 1,
            totalPrice: (productFilter[0].productCount + 1) * parseFloat(newProduct.productPrice),
          })
        }
        else {
          newBasketList.push(basket)
        }
      })

      setBasketList(
        newBasketList
      )
      totalBasketPrice = 0;
      newBasketList.forEach(item => {
        totalBasketPrice = totalBasketPrice + item.totalPrice
      })
      setBasketTotalPrice(totalBasketPrice)
    }
  }

  const productDelete = (id) => {
    var deleteBasketList = []
    basketList.forEach(basket => {
      if (basket.product.id !== id) {
        deleteBasketList.push(basket)
      }
    })
    setBasketList(deleteBasketList);
    var totalBasketPrice = 0;
    deleteBasketList.forEach(item => {
      totalBasketPrice = totalBasketPrice + item.totalPrice
    })
    setBasketTotalPrice(totalBasketPrice)
  }

  const basketAllDelete = () => {
    setBasketList([])
    setBasketTotalPrice(0)
  }




  return (
    <div>
      <BrowserRouter>
        <Header basketList={basketList} productDelete={productDelete} basketAllDelete={basketAllDelete} basketTotalPrice={basketTotalPrice} />
        <Content addCartProduct={addCartProduct} products={products} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;