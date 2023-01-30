import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);


    const ref = useRef(null);

    // useEffect(() => {
    //     console.log("Some thing", ref.current.className);
    //     if (ref.current.classList.contains('translate-x-full')) {
    //         ref.current.classList.remove('translate-x-full');
    //         ref.current.classList.add('translate-x-0');
    //     }
    //     else if (!ref.current.classList.contains('translate-x-full')) {
    //         ref.current.classList.remove('translate-x-0');
    //         ref.current.classList.add('translate-x-full');
    //     }
    // }, []);

    const toggleCart = () => {

        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }



    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center  py-2 shadow-xl '>
            <div className="logo mx-5">
                <Link href={'/'} legacyBehavior><a><Image src="/logo.webp" alt="" width={200} height={40} /></a></Link>
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-5 font-mono  md:text-md'>
                    <Link href={'/tshirts'} legacyBehavior><a><li>Tshirts</li></a></Link>
                    <Link href={'/hoodies'} legacyBehavior><a><li>Hoodies</li></a></Link>
                    <Link href={'/stickers'} legacyBehavior><a><li>Stickers</li></a></Link>
                    <Link href={'/mugs'} legacyBehavior><a><li>Mugs</li></a></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart cursor-pointer absolute right-0 top-4 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>

            <div ref={ref} className="sideCart z-10 w-72 h-full absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full rounded-bl-xl">
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-5 right-3 cursor-pointer text-2xl text-pink-400'><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold' >
                    {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
                    {Object.keys(cart).map((item: any, index: React.Key | null | undefined) => {
                        return (
                            <li className='f' key={index}>
                                <div className="item flex my-5">

                                    <div className='w-2/3 font-semibold'>{cart[item].name}</div>
                                    <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500 plus' onClick={() => { removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} /><span className='mx-2'>{cart[item].qty}</span><AiFillPlusCircle onClick={() => { addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='cursor-pointer text-pink-500 minus' /></div>
                                </div>
                            </li>
                        )
                    })}

                </ol>
                <div className='flex'>
                    <button className="flex  mr-2 text-white bg-pink-400 border-1 py-2 px-2 focus:outline-1 hover:bg-pink-500 rounded text-sm"><BsFillBagCheckFill className='m-1' />CheckOut</button>
                    <button onClick={clearCart} className="flex  mr-2 text-white bg-pink-400 border-1 py-2 px-2 focus:outline-1 hover:bg-pink-500 rounded text-sm">Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

// function useRef() {
//     throw new Error('Function not implemented.');
// }
