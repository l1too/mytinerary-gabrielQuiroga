import React from 'react'

const Carrousel = () => {
  return (

    <div className='flex justify-center h-100 '>
        <div className="carousel w-3/4 mx-auto h-auto">

            <div id="slide1" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide4" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2  h-auto my-auto'>
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                        </div>
                    <a href="#slide2" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 


            <div id="slide2" className="carousel-item relative w-full block">
            <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide1" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 align-center h-auto my-auto'>
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                        </div>
                    <a href="#slide3" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 

            <div id="slide3" className="carousel-item relative w-full block">
                    <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                    <div className='carousel-item relative w-full justify-center'>
                        <a href="#slide2" className="btn btn-circle my-auto">❮</a> 
                            <div className='columns-2 align-center h-auto my-auto'>
                                <img src="/image-solid.svg" className="w-40 " />
                                <img src="/image-solid.svg" className="w-40 " />
                                <img src="/image-solid.svg" className="w-40 " />
                                <img src="/image-solid.svg" className="w-40 " />
                            </div>
                        <a href="#slide4" className="btn btn-circle my-auto">❯</a>
                    </div>
            </div> 

            <div id="slide4" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide3" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 align-center h-auto my-auto'>
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                            <img src="/image-solid.svg" className="w-40 " />
                        </div>
                    <a href="#slide1" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 

        </div>

    </div>
  )
}

export default Carrousel