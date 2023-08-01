import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <div className='w-screen  h-screen'>

          <body>
              <header className='bg-white w-3/4 h-50 mx-auto'>

                <nav className='flex justify-between mt-6'>

                  <a className='p-2 font-extrabold text-lg' href="">My Tinerary</a>

                  <div className='flex gap-5'>
                      <button className='font-bold'>Home</button>
                      <button className='font-bold'>Cities</button>
                      <button className=' bg-violet-700 px-3 py-2 font-bold rounded text-white flex my-auto'>
                      <svg className='text-lg fill-current text-white mt-auto mb-auto mr-2' xmlns="http://www.w3.org/2000/svg" height="0.625em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        Login</button>
                  </div>

                </nav>

              </header>
              <main className='flex w-3/4 mx-auto mt-40 h-40'>
                  <section className='w-3/4 mx-auto flex-col gap-y-10'>
                      <h1 className='font-bold text-4xl w-3/4 mb-6'>Find the perfect destination</h1>
                      <p className='w-3/4 mb-6'>Our app will help you find the perfect path for you next trip. With a easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                      <button className='bg-violet-700 rounded text-white p-2 w-60 '>View More</button>
                  </section>
                  <div className='w-1/4'>
                      <img src="/image-solid.svg" alt=""/>
                  </div>
              </main>
              <footer>

              </footer>
          </body>

      </div>
    </>
  )
}

export default App
