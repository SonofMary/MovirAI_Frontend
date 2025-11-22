import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

export const TextInput = () => {
    const {setPrompt, prompt, fetchMovies} = useContext(AuthContext)

    return (
        <div className='flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-2' id='search'>
            <h2 className='text-base sm:text-xl md:text-xl font-mono text-center mb-2 sm:mb-2'>
                Find Any Movie
            </h2>
            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl lg:max-w-4xl items-center'>
                <textarea 
                    type="text" 
                    className='min-h-12 sm:min-h-8 bg-gray-800/90 border-2 border-gray-600 hover:border-primary/50 focus:border-primary w-full p-6 placeholder:text-gray-400 text-white text-base rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 shadow-lg' 
                    placeholder='Describe any movie...' 
                    onChange={(e)=> setPrompt(e.target.value)}
                />
                <button className='btn btn-primary text-lg font-semibold px-8 py-4 min-h-0 whitespace-nowrap sm:w-24 w-full rounded-sm hover:scale-105 transition-transform duration-300 shadow-lg' onClick={fetchMovies}>
                    Search
                </button>
            </div>
        </div>
    )
}