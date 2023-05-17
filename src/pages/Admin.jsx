import React, { useState } from 'react'
import HeaderAdmin from '../componets/Admin/HeaderAdmin'
import add from '../images/plus (2).png'
import Product from '../componets/Product'
import AddForm from '../componets/Admin/AddForm'

const Admin = () => {

    const [Add, setAdd] = useState(false)


    return (
    <div>
        <HeaderAdmin/>
    
        <div class="flex justify-between px-10 m-5">
        <h1 id="products" class="text-center text-xl font-semibold">- Total Products (products.count) </h1>
        <button onClick={()=>setAdd(!Add)} class="add hover:scale-110 duration-200 text-white bg-green-700 py-2 px-6 rounded-3xl flex items-center font-bold"> <img src={add} class='w-6 m-2' /> New Product</button>
        </div>
    
        {/* products */}

        <section>

        <div class="grid md:grid-cols-3 max-w-[1130px] mx-auto">

            <Product/>
            <Product/>
            <Product/>
            
        </div>

        </section>

<h1 id="products" class="text-xl ml-16 font-semibold">- Banners & Others</h1>

<div class="grid md:grid-cols-2 gap- mx-auto">

{/* intro_head */}
    <form class="p-5 m-2">

        <label class="font-bold">
        Intro Heading
        </label>
        <input type="text" id="intro_heading" value="{{intro_head}}" class="w-full h-20 text-xl border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Intro Heading" name="value" />
        <input type="submit" value="Change" class="text-white float-right bg-blue-700 py-2 px-8 rounded-3xl"/>
    </form>

{/* introsub */}
    <form class="p-5 m-2">

    <label class="font-bold">
        Intro Content
    </label>
    <input type="text" id="intro_content" value="{{intro_sub_head}}" class="w-full h-20 text-xl border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Intro Content" name="value" />
    <input type="submit" value="Change" class="text-white float-right bg-blue-700 py-2 px-8 rounded-3xl"/>
</form>


</div>

<div class="grid md:grid-cols-2 gap-2 mx-auto">

{/* email */}
    <form action="{% url 'email' %}" method="post"  class="p-5 m-2">
    <label class="font-bold">
        Email
    </label>
    <input type="email" id="email" value="{{email}}" class="text-xl border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Email" name="value" />
    <input type="submit" value="Change" class="text-white float-right bg-blue-700 py-2 px-8 rounded-3xl"/>
</form>



<form action="{% url 'address' %}" method="post" class="p-5 m-2">
    <label class="font-bold">
        Address
    </label>
    <input type="text" id="address"  value="{{address}}" class=" text-xl border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Address" name="value" />
    <input type="submit" value="Change" class="text-white float-right bg-blue-700 py-2 px-8 rounded-3xl"/>
</form>
</div>

{/* about */}

<form action="{% url 'about' %}" method="post" class="p-5 m-5">

    <label class="font-bold">
        About Content
    </label>
    <textarea type="text" id="about_content" value="{{about}}" class="w-full h-44 text-xl border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="About Content" name="value"></textarea>
    <input type="submit" value="Change" class="text-white float-right bg-blue-700 py-2 px-8 rounded-3xl"/>
</form>














    
    {Add && <AddForm/> }
    </div>
  )
}

export default Admin