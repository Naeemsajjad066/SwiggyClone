import React from 'react'

function Card(props) {
  return (
    <div className='group  w-full md:w-[280px] shrink-0 '>
        <div className=' h-[200px] rounded-[15px] overflow-hidden relative'>
            <img className=' group-hover:scale-110 transition duration-800 object-cover  w-full' src={"https://swiggy-api-ujb7.onrender.com/images/"+props.image} alt="" />
            <div className="image-overlay absolute w-full h-full top-0 flex items-end text-xl text-white font-sans p-2 tracking-tighter">
                {props.offer}
            </div>
        </div> 
        <div className='px-3 pb-3'>
            <p className='text-lg font-bold mt-3 '>{props.title}</p>
            <p className='flex items-center gap-1 font-semibold'><i className="fa-solid fa-star"></i>
            {props.rating} <span>{props.minTime}-{props.maxTime} mins</span> </p>
            <p className='text-md font-light'>{props.name}</p>
            <p className='text-md font-sans font-light'>{props.place}</p>
        </div>
      
    </div>
  )
}

export default Card
