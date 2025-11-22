import React from 'react'
import { TextInput } from './TextInput'

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1709384733835-1628e7ea2aa3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-blend-overlay bg-black opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md lg:max-w-2xl xl:max-w-3xl flex flex-col items-center space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Describe a Movie. Discover Your Next Favorite
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl max-w-md lg:max-w-2xl leading-relaxed">
            Enter a description, theme, or vibe—and get curated movie recommendations instantly.
          </p>
          {/* <button className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4  min-h-0">
            Get Started
          </button> */}
           <TextInput/>

          
        </div>
       
      </div>
    </div>
  )
}