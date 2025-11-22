import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';

export const Card = ({movie}) => {

   const {loading} = useContext(AuthContext)

  if (loading) {
    return (
      <div className="flex w-96 flex-col gap-4 animate-pulse">
        <div className="skeleton h-48 w-full bg-gray-300 rounded-lg"></div>
        <div className="skeleton h-6 w-40 bg-gray-300 rounded"></div>
        <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
        <div className="skeleton h-4 w-3/4 bg-gray-300 rounded"></div>
      </div>
    );
  }
  return (
   <div className="card bg-base-100 w-full h-[430px] shadow-sm flex flex-col" >
  <figure>
    <img
      src={movie.Poster}
      alt="Shoes"
      loading='lazy'
      className='w-full object-cover h-60' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {movie.Title}
      <div className="badge badge-secondary">{movie.imdbRating}</div>
    </h2>
    <p>{movie.Plot}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{movie.Type}</div>
      {/* <div className="badge badge-outline">{movie.Genre}</div> */}
    </div>
  </div>
</div>
  )
}
