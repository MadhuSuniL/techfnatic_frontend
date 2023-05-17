import React from 'react'

const AddForm = () => {
  return (
    <div>
    <div className="add-form bg-red-800 text-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl shadow-gray-500 rounded-xl ">
    <h1 id="products" className="text-center text-md font-semibold m-2 mt-4">- Add Products -</h1>

    <form className="text-black p-3" >
        
        <center>
            <input type="text" className="border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Title" name="title"/>
            <br/>
            <textarea className="h-44 border-2 border-gray-400 rounded-xl p-1 m-2" placeholder="Content" name="content"></textarea>
            <br/>
            <lebel>Image : </lebel>
            <input type="file"  className="m-2" name="img"/>
            <br/>
            <input type="submit"  value="Add" className="text-white bg-green-700 py-2 px-8 rounded-3xl"/>
    
        </center>

    </form>


</div>

    </div>
  )
}

export default AddForm