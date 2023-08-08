import React from 'react'

const Carrousel = () => {
  return (

    <div className='flex justify-center h-100 '>
        <div className="carousel w-3/4 mx-auto h-auto bg-slate-100">
       
            <div id="slide1" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide3" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 my-auto '>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/moscu.jpg" className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/venecia.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/paris.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/madrid.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                        </div>
                    <a href="#slide2" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 


            <div id="slide2" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide1" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 my-auto '>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/london.jpg" className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/santa-cruz.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/roma.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/copenhagen.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                        </div>
                    <a href="#slide3" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 

            <div id="slide3" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide2" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 my-auto '>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/colmar.jpg" className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/tokyo.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/liguria.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src="/alejandria.jpg" className="object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>Visit Moscu</h3>
                            </div>
                        </div>
                    <a href="#slide1" className="btn btn-circle my-auto">❯</a>
                </div>
            </div> 

        </div>

    </div>
  )
}

export default Carrousel