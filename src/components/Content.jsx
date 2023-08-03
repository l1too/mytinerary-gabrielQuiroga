import React from 'react'

const Content = () => {
  return (
<div className="card lg:card-side w-3/4  mx-auto my-20">

    <div className="card-body px-0 ">
    <h1 className='font-bold text-4xl w-3/4 mb-6 max-[950px]:text-center max-[950px]:w-full'>Find the perfect destination</h1>
    <p className='w-3/4 mb-6 max-[950px]:text-center max-[950px]:w-full'>Our app will help you find the perfect path for you next trip. With a easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <button className='bg-violet-700 rounded text-white p-2 w-60 max-[950px]:mx-auto max-[950px]:w-full animate-bounce'>View More</button>
    </div>
    <figure className='w-3/6 max-[950px]:mx-auto'>
        <img src="/image-solid.svg" alt="Album"/>
    </figure>
</div>
  )
}

export default Content