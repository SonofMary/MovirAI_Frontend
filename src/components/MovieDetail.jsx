import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

export const MovieDetail = ({ movie }) => {
  const { movieObject, getMovieTrailerUrl } = useContext(AuthContext)

  const handleWatchMovie = async () => {
    const trailerUrl = await getMovieTrailerUrl(movieObject)
    console.log(trailerUrl)
    window.open(trailerUrl, "_blank")
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-4 sm:p-6 md:p-8">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-center sm:text-left">{movieObject.Title}</h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <figure className="flex-shrink-0 w-full sm:w-48 md:w-56 lg:w-64 h-[330px]">
              <img
                src={movieObject.Poster}
                alt="Movie"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </figure>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl font-semibold">
                {movieObject.Title} : {movieObject.Type === "movie" ? "Movie Details" : "Series Details"}
              </h2>
              <p className="text-sm sm:text-base"><span className="font-semibold">Plot:</span> {movieObject.Plot}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Country:</span> {movieObject.Country}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Language:</span> {movieObject.Language}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Casts:</span> {movieObject.Actors}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Director:</span> {movieObject.Director}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">IMDB Rating:</span> {movieObject.imdbRating}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Year:</span> {movieObject.Year}</p>
              <div className="mt-auto flex justify-end">
                <button className="btn btn-primary" onClick={handleWatchMovie}>Watch</button>
              </div>
            </div>
          </div>
          <div className="modal-action mt-4">
            <form method="dialog">
              <button className="btn w-full sm:w-auto">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
