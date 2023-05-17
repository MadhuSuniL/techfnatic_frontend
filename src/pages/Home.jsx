import React from 'react'
import Header from '../componets/Home/Header'
import banner from '../images/banner.png'
import about from '../images/about.svg'
import loc from '../images/geo-alt-fill.svg'
import em from '../images/envelope-fill.svg'
import fb from '../images/facebook.svg'
import ld from '../images/linkedin.svg'
import Product from '../componets/Product'
import logo from '../images/logo.png'

const Home = () => {
  return (
    <div>
    <header>
        <Header/>
        <div className="text-red-900 border-t-2 border-red-900"></div>
    </header>

{/* intro */}
    <section>

    <div className="grid md:grid-cols-2">
    <div className="p-10 md:p-28 md:pr-36">
        <h1 className="text-left leading-tight text-5xl font-extrabold">intro_head</h1>
    <h1 className="m-1 my-5 text-gray-900 ">intro_sub_head</h1>
    <button className="text-white bg-red-700 py-2 px-8 duration-100 hover:scale-105 ease-linear rounded-3xl">Our Products</button>
    </div>
    <img src={banner} className="mt-10 p-2 pr-28"/>
    </div>

    </section>

<h1 id="products" className="text-center text-3xl font-semibold">- Our Products - </h1>

{/* products */}

<section>

<div className="grid md:grid-cols-3 max-w-[1130px] mx-auto">

    <Product/>
    <Product/>
    <Product/>
    
</div>

</section>

{/* about */}

<div className="grid md:grid-cols-2 mt-5">

    <img src={about} className="w-[60%] m-10 ml-32"/>

    <div className="pt-16 m-2 md:m-10">
        <h1 className="text-left leading-tight text-4xl font-semibold">About us</h1>
    <h1 className="m-1 md:my-5 text-gray-900 ">about</h1>
    </div>
    

</div>


{/* footer */}
<footer className="p-3">
    <header className="flex item-center justify-between px-28 py-2">
        <img src={logo} className="w-56 m-3 ml-0"/>
        <div className="flex items-center text-[14px] text-red-900 font-extrabold">
            <h1 className="m-3 cursor-pointer hover:scale-110 duration-200 hover:underline"><img src={fb} className="w-8"/></h1>
            <h1 className="m-3 cursor-pointer hover:scale-110 duration-200 hover:underline"><img src={ld} className="w-8"/></h1>
            
        </div>
    </header>

    <div className="grid grid-cols-2">
        <div className="mx-10 font-semibold">
            <h1>Home</h1>
            <h1>Products</h1>
            <h1>Career</h1>
            <h1>ContactUs</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
        </div>
        <div className="mx-10 font-semibold ">
            <h1 className="font-bold text-red-900 text-md flex"> <img src={em} className="mr-1"/> Email</h1>
            <h1>email</h1>
            <h1 className="font-bold text-red-900 text-md flex"><img src={loc} className="mr-1"/>Address</h1>
            <h1>address</h1>
            
        </div>

    </div>

</footer>


    </div>
  )
}

export default Home