import React from 'react'
import logo from '../../images/logo.png'

const HeaderAdmin = () => {
  return (
    <div>
        <header className="flex item-center justify-between md:px-28 py-2">
        <div className="flex items-center">
            <img src={logo} className="w-24 md:w-56 m-3 md:ml-0"/>
            <sub className="text-red-800 font-bold">Admin</sub>
        </div>
        <div className="flex items-center text-[12px] md:text-[14px] text-red-900 font-extrabold">
            <h1 className="m-3 cursor-pointer hover:scale-110 duration-200 hover:underline">Products</h1>
            <h1 className="m-3 cursor-pointer hover:scale-110 duration-200 hover:underline"><a href="#products">Banners&Others</a></h1>
        </div>
    </header>
    <div className="text-red-900 border-t-2 border-red-900"></div>

    </div>
  )
}

export default HeaderAdmin