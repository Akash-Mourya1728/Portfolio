import React from "react";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Heading */}
      <h2 className="text-purple-500 text-xl md:text-2xl font-bold uppercase text-center">
        Contact
      </h2>

      <h1 className="text-3xl md:text-5xl font-bold text-center mt-3 leading-tight">
        Let's Work Together
      </h1>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-14">
        
        {/* LEFT SIDE */}
        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6 md:p-10
          glow
          "
        >
          <h1 className="text-2xl md:text-3xl font-semibold">
            Get In Touch
          </h1>

          <p className="text-gray-400 mt-5 leading-7 text-sm md:text-base">
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
          </p>

          <div className="mt-10 space-y-6">
            
            {/* location */}
            <a
              href="https://maps.google.com/?q=Bareilly,India"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg md:text-xl hover:text-purple-400 transition"
            >
              <MdLocationOn className="text-3xl text-purple-500" />
              Bareilly, India
            </a>

            {/* email */}
            <a
              href="mailto:akashmourya64t@gmail.com"
              className="
              bg-purple-600
              px-6 py-3
              rounded-xl
              inline-block
              hover:scale-105
              transition
              glow
              "
            >
              Send Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6 md:p-10
          glow
          flex
          flex-col
          gap-5
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            text-sm md:text-base
            focus:border-purple-500
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            text-sm md:text-base
            focus:border-purple-500
            "
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="
            bg-black/30
            border border-white/10
            rounded-xl
            px-5 py-4
            outline-none
            resize-none
            text-sm md:text-base
            focus:border-purple-500
            "
          />

          <button
            className="
            bg-purple-600
            hover:bg-purple-500
            py-4
            rounded-xl
            text-base md:text-lg
            hover:scale-105
            transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;