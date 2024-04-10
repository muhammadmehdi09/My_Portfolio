import React from 'react'

const Contact = () => {
  return (
    <section className='contact bg-[#07374a] relative h-[92vh]' id='contact-me'>
    <div className='max-w-[1200px] w-[90%] m-auto'>
      <div className='contact-content absolute -translate-x-2/4 -translate-y-2/4 text-center left-2/4 top-2/4'>
        <h2 className="text-[2.5rem] font-normal text-[#25b79f] pb-2">Contact Me</h2>
        <p className='text-[#f0f0e6] text-base pb-[0.2rem]'>
          Get in touch with me on muhammadmehdi09@gmail.com
        </p>
        <p className='text-[#25b79f] text-base pb-[1.8rem] p-2'>Or find me on:</p>
        <a className="no-underline text-[#25b79f] transition-[0.3s] duration-[ease-in-out] p-2 hover:text-[#f0f0e6]"
          href='https://github.com/muhammadmehdi09' target='blank'><i className='fab fa-github'></i>Github</a>
        <p>AND</p>
        <a className="no-underline text-[#25b79f] transition-[0.3s] duration-[ease-in-out] p-2 hover:text-[#f0f0e6]"
          href='https://www.linkedin.com/in/muhammadmehdi09/' target='blank'><i className='fab fa-linkedin'>Linkedin</i></a>
      </div>
    </div>
  </section>
  )
}

export default Contact