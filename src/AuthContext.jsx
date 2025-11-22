import React, { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
export const AuthContext = createContext()
export const AuthProvider = ({children}) => {

const [prompt, setPrompt] = useState("")
const [recommended, setRecommended] = useState([])
const [moviesArray, setMoviesArray ] = useState([])
const [loading, setLoading] = useState(false)
const [movieObject, setMovieObject] = useState({})
const [movieUrlData, setMovieUrlData] = useState({})

   const [movieBackendUrl, setMovieBackendUrl] = useState("")

const fetchMovies = async () => {
  try {

    if(!prompt) {
      return alert("Please Enter a search")
    }
    setLoading(true)

    setMoviesArray([])
    const response = await  axios.post(`https://movirai-backend.onrender.com/movieApp/movie`, {prompt})

    console.log(response.data)
    const rec = response.data.recommended
    setRecommended(rec)

   await fetchMoviesFromOMDB(rec)

    setLoading(false)
    console.log(recommended, moviesArray)
  } catch (error) {
    setLoading(false)
    console.log(error, "Catch Error")
  }
}

const fetchMoviesFromOMDB = async (moviesArray) => {

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY

  const response = moviesArray.map((movie) => axios.get(`https://www.omdbapi.com/?&apikey=${API_KEY}&t=${movie}`))
  
  const results = await Promise.all(response)

  const movieDetails = results.map( result => result.data)

  setMoviesArray(movieDetails)


}

const fetchOneMovieDetails = async (movie) => {

  try {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY

    const response = await axios.get(`https://www.omdbapi.com/?&apikey=${API_KEY}&t=${movie}&plot=full`)

const result = response.data
setMovieObject(result)
 document.getElementById("my_modal_4").showModal();

    
  } catch (error) {
    console.log("catch error", error)
  }

 

}

async function getMovieTrailerUrl(movieObject) {

    
        const res = await axios.post("https://movirai-backend.onrender.com/movieApp/trailer", {movie: movieObject})

        const url = res.data.data.url
        return url

    };

 

  return (
    <AuthContext.Provider value={{fetchMovies, setPrompt, prompt, moviesArray, loading, movieObject, setMovieObject, fetchOneMovieDetails, movieUrlData, movieBackendUrl, getMovieTrailerUrl }} >
        
        {children}
        
        </AuthContext.Provider>
  )
}
