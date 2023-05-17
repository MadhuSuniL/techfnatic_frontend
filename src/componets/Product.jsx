import React from 'react'
import arrow from '../images/arrow.svg'
const Product = () => {
  return (
    <div className='hover:scale-95 duration-300'>
        <div class="border-2 border-black m-2 rounded-xl">
        <img src='{{product.img.url}}' class="w-96"/>
    <div class="text-red-900 border-t-2 opacity-40 border-black mx-3"></div>
        <div class="m-4">
        <h1 class="text-red-800 text-2xl font-semibold">product.title</h1>
        <h1 class="text-2xl font-bold">
            product.content</h1>
            <h1 class="my-3 flex item-center text-gray-800 font-semibold">Know More <img src={arrow} class="mx-2 w-5" alt="Arrow Icon"/> </h1>
        
        </div>
    </div>
    </div>
  )
}

export default Product