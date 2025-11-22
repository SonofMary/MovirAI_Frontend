import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TextInput } from './components/TextInput'
import { Card } from './components/Card'
import { AuthProvider } from './AuthContext'
import { Movies } from './components/Movies'
import { MovieDetail } from './components/MovieDetail'
import { Footer } from './components/Footer'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Hero/>
   
    {/* <TextInput/> */}
    <Movies/>
    <MovieDetail/>
    <Footer/>
    </AuthProvider>
    
    </>
  )
}

export default App
