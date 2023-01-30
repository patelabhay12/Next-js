import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [cart, setcart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // console.log("Hey I am A UseEffct From _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, [])
  const savecart = (newcart: any) => {
    localStorage.setItem("cart", JSON.stringify(newcart));
    // console.log(newcart);
    let subt = 0;
    let keys = Object.keys(newcart);
    for (let i = 0; i < keys.length; i++) {
      subt += newcart[keys[i]].price * newcart[keys[i]].qty;
    }
    setSubTotal(subt);
    // console.log(cart);
  }


  const addTocart = (itemCode: any, qty: any, price: any, name: any, size: any, variant: any) => {
    let newcart = cart;
    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newcart[itemCode] = { qty: 1, price, name, size, variant }
    }
    // console.log(newcart);
    setcart(newcart);
    savecart(newcart);
  }


  const clearcart = () => {
    setcart({});
    savecart({});
  }

  const removeFromcart = (itemCode: any, qty: any, price: any, name: any, size: any, variant: any) => {
    let newcart = cart;
    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty - qty;
    }
    console.log(newcart);
    if (newcart[itemCode].qty <= 1) {
      delete newcart[itemCode];
    }
    setcart(newcart);
    savecart(newcart);
  }



  return (
    <>

      <Navbar cart={cart} addToCart={addTocart} removeFromCart={removeFromcart} clearCart={clearcart} subTotal={subTotal} />
      < Component cart={cart} addToCart={addTocart} removeFromcart={removeFromcart} clearcart={clearcart} subTotal={subTotal} {...pageProps} />;
      <Footer />

    </>
  )
}