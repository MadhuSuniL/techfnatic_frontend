import React from 'react'

const Invite_form = (props) => {

function send_invitation(){
    props.fun(false)
    setTimeout(function(){
      alert('Invitation sent..!')
    },1000)
}

  return (
    <div className='z-20 bg-white fixed w-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-red-4000  shadow-2xl shadow-gray-500 rounded-xl p-10 pt-5'>
        <h1 className='m-3 text-center text-red-400 font-bold'>Admin Invitation</h1> 
        <center>

        <input type='email' className="border-2 border-gray-400 w-72 rounded-xl p-2 m-2" placeholder='Enter email of new admin..!' />
       <br /> <button onClick={send_invitation} className="text-white border-2 my-2 duration-100 hover:scale-105 ease-linear border-green-600 bg-blue-700 py-2 px-8 rounded-3xl float-right0" >Send Invitation </button>
        </center>

    </div>
  )
}

export default Invite_form