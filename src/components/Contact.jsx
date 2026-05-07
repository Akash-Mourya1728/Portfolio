import React from 'react'
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id='contact'
      className='min-h-screen bg-black text-white px-20 py-20'
    >

      {/* Heading */}
      <h2 className='text-purple-500 text-2xl font-bold uppercase text-center'>
        Contact
      </h2>

      <h1 className='text-5xl font-semibold text-center mt-3'>
        Let's Work Together
      </h1>

      {/* Main Container */}
      <div className='grid md:grid-cols-2 gap-10 mt-20'>

        {/* LEFT SIDE */}
        <div
          className='
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-10
          glow
          '
        >

          <h1 className='text-3xl font-semibold'>
            Get In Touch
          </h1>

          <p className='text-gray-400 mt-5 leading-8'>
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
          </p>

          <div className='mt-10 space-y-5'>

            <h2 className='text-xl mb-5'>
              <a href="https://maps.google.com/?q=Bareilly,India"   className=' flex items-center gap-3 text-xl hover:text-purple-400  transition'> <MdLocationOn className='text-3xl text-purple-500' />Bareilly, India</a>
            </h2>

            <h2 className='text-xl'>
              <a href="mailto: akashmourya64t@gmail.com" className='  bg-purple-60 px-6 py-3 rounded-xl inline-block hover:scale-105 transition glow'>Send Email</a>
            </h2>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <form
          className='
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-10
          glow
          flex
          flex-col
          gap-6
          '
        >

          <input
            type="text"
            placeholder='Your Name'
            className='
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            focus:border-purple-500
            '
          />

          <input
            type="email"
            placeholder='Your Email'
            className='
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            focus:border-purple-500
            '
          />

          <textarea
            rows="6"
            placeholder='Your Message'
            className='
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            resize-none
            focus:border-purple-500
            '
          />

          <button
            className='
            bg-purple-600
            hover:bg-purple-500
            py-4
            rounded-xl
            text-lg
            transition
            '
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact