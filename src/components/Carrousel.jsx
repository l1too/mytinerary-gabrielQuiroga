import React from 'react'

const Carrousel = () => {

    const cities = [
        {name: 'Rome',
        img: '/rome.jpg'},
        {name: 'Moscow',
        img: '/moscow.jpg'},
        {name: 'Venice',
        img: '/venice.jpg'},
        {name: 'London',
        img: '/london.jpg'},
        {name: 'Liguria',
        img: '/liguria.jpg'},
        {name: 'Copenhagen',
        img: '/copenhagen.jpg'},
        {name: 'Tokyo',
        img: '/tokyo.jpg'},
        {name: 'Alexandria',
        img: '/alexandria.jpg'},
        {name: 'Madrid',
        img: '/madrid.jpg'},
        {name: 'Paris',
        img: '/paris.jpg'},
        {name: 'Santa Cruz',
        img: '/santa-cruz.jpg'},
        {name: 'Colmar',
        img: '/colmar.jpg'}
    ]

  return (

    <div className='flex justify-center h-100 '>
        <div className="carousel w-3/4 mx-auto h-auto bg-slate-100">
       
            <div id="slide1" className="carousel-item relative w-full block">
                <h2 className='text-center mb-5 font-extrabold text-3xl'>Popular Mytineraries</h2>
                <div className='carousel-item relative w-full justify-center'>
                    <a href="#slide3" className="btn btn-circle my-auto">❮</a> 
                        <div className='columns-2 my-auto '>
                            <div className='w-32 h-52 mb-5 relative'>
                                <img src={cities[0].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[0].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[1].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[1].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[2].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[2].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[3].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[3].name}`}</h3>
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
                            <img src={cities[4].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[4].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[5].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[5].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[6].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[6].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[7].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[7].name}`}</h3>
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
                            <img src={cities[8].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[8].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[9].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[9].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[10].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[10].name}`}</h3>
                            </div>
                            <div className='w-32 h-52 mb-5 relative'>
                            <img src={cities[11].img} className=" object-cover h-full w-full " />
                                <h3 className='text-center absolute bottom-1 bg-slate-600 text-white w-full'>{`Visit ${cities[11].name}`}</h3>
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