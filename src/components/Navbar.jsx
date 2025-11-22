import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Navbar = () => {

  const [theme, setTheme] = useState("light")

  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "synthwave" : "light"))
  }
  return (
//     <div>
//         <div className='w-full bg-blue-200 py-3 text-blue-950 flex justify-between px-2'>
//             <p>LOGO</p>
//             <div className='flex gap-3'>
//                 <span>Movie Search</span>
//                 <span>About Us</span>
//                 <span>Contact</span>
//                <label className="flex cursor-pointer gap-2">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <circle cx="12" cy="12" r="5" />
//     <path
//       d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//   </svg>
//   <input type="checkbox" value="synthwave" className="toggle theme-controller"  onChange={handleToggleTheme}/>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//   </svg>
// </label>
//             </div>

//         </div>
//     </div>
<div className="navbar bg-base-100 shadow-sm px-4">
  {/* Mobile: Hamburger Menu */}
  <div className="navbar-start">
    
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
      >
        <li><a href='#search'>Movie Search</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a onClick={()=>document.getElementById('my_modal_1').showModal()}>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">MovirAI</a>
    {/* Brand for mobile */}
    
  </div>

  {/* Desktop: Navbar Center */}
  <div className="navbar-center hidden lg:flex">
   
  </div>

  {/* Navbar End (Icons) */}
  <div className="navbar-end">

     
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li><a href='#search'>Movie Search</a></li>
      <li><a href='#contact'>Contact</a></li>
      <li><a onClick={()=>document.getElementById('my_modal_1').showModal()}>About</a>

</li>
    </ul>
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
    <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off  h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  </div>

  <dialog id="my_modal_1" className="modal">
  <div className="modal-box max-w-md w-11/12">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">MovirAI is a smart movie search application that helps users discover movies quickly and easily.
It allows you to search for movies, explore details such as ratings, genres, and release dates, and get accurate information powered by modern AI tools.
The app is built with React, Tailwind CSS, and DaisyUI, offering a fast, responsive, and clean user experience.</p>
<p>Made with love 💚</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn"  >Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>

    
  )
}
