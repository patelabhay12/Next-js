import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai';
;

const Navbar = () => {


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
            console.log("Some thing", ref.current.className);
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
            <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>

            <div ref={ref} onClick={toggleCart} className="sideCart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full rounded-bl-xl">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span  className='absolute top-5 right-3 cursor-pointer text-2xl text-pink-400'><AiFillCloseCircle /></span>
                <ol>
                    <li className='flex flex-col space-y-5'>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                        <span>Tshirt - Wear The Code</span>
                    </li>
                </ol>
            </div>


        </div>
    )
}

export default Navbar;

// function useRef() {
//     throw new Error('Function not implemented.');
// }
