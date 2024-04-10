import React from 'react'

const Home = () => {
  return (
    <section className='header bg-[#07374a] h-screen home-content' id="home">
    <div className='absolute -translate-x-2/4 -translate-y-2/4 text-[#25b79f] w-full text-center left-2/4 top-[47%]'>
      <h1 className='text-[2.2rem] text-center min-[400px]:text-[3.3rem] min-[600px]:text-[4.4rem]'>Hi, I'm Muhammad Mehdi
      </h1>
      <p className="text-[#f0f0e6] min-[600px]:text-5xl min-[400px]:text-4xl text-2xl">A Web Developer in training.</p>
    </div>
  </section>
  )
}

export default Home