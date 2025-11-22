import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const MovieDetail = ({movie}) => {

 

     const {movieObject, watchMovie, movieDataUrl, movieBackendUrl, getMovieTrailerUrl} = useContext(AuthContext)
// {"Title":"Hero","Year":"2002","Rated":"PG-13","Released":"27 Aug 2004","Runtime":"107 min","Genre":"Action, Adventure, Drama","Director":"Yimou Zhang","Writer":"Feng Li, Yimou Zhang, Bin Wang","Actors":"Jet Li, Tony Leung Chiu-wai, Maggie Cheung","Plot":"Ancient China and the Qin Empire is out to conquer the six kingdoms. This makes its king a target for assassination. However, one man has single-handedly ensured the safety of the king, by killing the three most notorious assassins in the land. Treated as a hero, he is summoned for an audience with the king.","Language":"Mandarin","Country":"Hong Kong, China","Awards":"Nominated for 1 Oscar. 46 wins & 48 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYTlkZWVjYzQtZmI1My00MGM2LTlmZjEtNjU1M2Y1MTRkNmZjXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"7.9","imdbVotes":"192,049","imdbID":"tt0299977","Type":"movie","DVD":"06 Jan 2004","BoxOffice":"$53,710,019","Production":"N/A","Website":"N/A","Response":"True"}



   const handleWatchMovie = async () => {
    const trailerUrl = await getMovieTrailerUrl(movieObject)
    console.log(trailerUrl)
    window.open(trailerUrl, "_blank")
   }
  return (
    <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <p className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</p> */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{movieObject.Title}</h3>
   <div className="card card-side bg-base-100 shadow-sm">
  <figure className='flex-shrink-0 h-[330px] w-[220px]'>
    <img
      src={movieObject.Poster}
      alt="Movie" className='w-full h-full object-cover' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{movieObject.Title} : {movieObject.Type === "movie"? "Movie Details" : "Series Details"}</h2>
    <p>Plot: {movieObject.Plot}</p>
    <p>Country: {movieObject.Country}</p>
    <p>Language: {movieObject.Language}</p>
    <p>Casts: {movieObject.Actors}</p>
    <p>Director: {movieObject.Director}</p>
    <p>IMDB Rating: {movieObject.imdbRating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleWatchMovie}>Watch</button>
    </div>
  </div>
</div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></div>
  )
}
