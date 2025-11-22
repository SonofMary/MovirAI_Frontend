import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Card } from './Card'
import { MovieDetail } from './MovieDetail'

export const Movies = () => {
     const {moviesArray, loading, movieObject, setMovieObject, fetchOneMovieDetails} = useContext(AuthContext)

    //  console.log(moviesArray)

     if (loading) {
        return (
            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4 sm:p-6'>
                <Card/>      
            <Card/>     
            <Card/>   
            </div>
                )
     }

    
  return (
    <>
    {moviesArray.length > 0 && (<p className='text-center text-3xl py-3'>Recommended Movies</p>
)}
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-6 p-4 sm:p-6 w-full mx-auto' >
       
        {moviesArray.map((movie, index) =>( <div key={index} onClick={()=> fetchOneMovieDetails(movie.Title)}  className='transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-red-500 w-full'>
             
            <Card movie={movie}  />
            </div>))}
    </div>

    <MovieDetail movie={movieObject}/>
    </>
  )
}
