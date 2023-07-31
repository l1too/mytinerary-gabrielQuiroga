import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <div className='w-screen bg-red-400 h-screen'>

          <body>
              <header className='bg-white w-3/4 h-50 mx-auto'>

                <nav className='flex justify-between'>

                  <a href="">My Tinerary</a>

                  <div className='flex gap-5'>
                      <button>Home</button>
                      <button>Cities</button>
                      <button className=' bg-violet-700 p-3'>Login</button>
                  </div>

                </nav>

              </header>
              <main>
                  <section className='w-3/4 mx-auto'>
                      <h1>Find the perfect destination</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo quidem voluptate hic magnam corporis, tempora et. Totam ab suscipit qui debitis cum tenetur minus quasi consectetur laborum quia nesciunt sunt ipsum possimus labore voluptate nihil aliquam, excepturi perspiciatis soluta.</p>
                      <button>View More</button>
                  </section>
                  <div>
                      <img src="" alt="" />
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
