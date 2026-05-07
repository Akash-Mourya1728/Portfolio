import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (

    <footer
      className='
      border-t
      border-white/10
      bg-black
      text-white
      px-10
      py-8
      mt-20
      '
    >

      <div
        className='
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-5
        '
      >

        {/* LEFT */}
        <h1 className='text-2xl font-semibold'>
          Akash <span className='text-purple-600'>Mourya</span> 
        </h1>

        {/* CENTER */}
        <p className='text-gray-400 text-center'>
        Copyright  © 2026 All Rights Reserved
        </p>

        {/* RIGHT */}
 <div className="flex gap-6 text-2xl   ">
        <a className="hover:text-purple-400 hover:scale-125 transition" href="http://github.com/Akash-Mourya1728">
          <FaGithub />
        </a>

        <a  className="hover:text-blue-400 hover:scale-125 transition" href="https://linkedin.com/in/akash-mourya1728">
          <FaLinkedin />
        </a>

        <a className="hover:text-cyan-400 hover:scale-125 transition" href="https://Twitter.com/AkashMourya64">
          <FaTwitter />
        </a>

        <a className="hover:text-pink-400 hover:scale-125 transition" href="https://instagram.com/its__akash_mourya">
          <FaInstagram />
        </a>
      </div>

      </div>

    </footer>
  )
}

export default Footer