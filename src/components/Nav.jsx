import React from 'react'

const Nav = () => {
  return (
    <div className='fixed top-0 w-full flex items-center justify-between px-10 py-4 bg-black backdrop-blur-md text-white'>

        <div className='text-xl font-bold text-purple-400  '>Akash Mourya</div>

    <div className=' flex  gap-10  '>
        <a className='hover:scale-105 hover:underline ' href="#home">Home</a>
        <a className='hover:scale-105 hover:underline ' href="#about">About</a>
        <a className='hover:scale-105 hover:underline ' href="#project">Project</a>
        <a className='hover:scale-105 hover:underline ' href="#skills">Skills</a>
        <a className='hover:scale-105 hover:underline ' href="#contact">Contact</a>
    </div>

    <a href="/Resume.pdf" download className='px-5 py-2 bg-purple-600 rounded-lg glow hover:scale-105 transition '>Download Resume </a>

    </div>
  )
}

export default Nav