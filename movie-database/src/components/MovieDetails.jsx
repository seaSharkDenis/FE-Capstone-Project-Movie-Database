import React from "react";
import { FaStar, FaArrowLeft } from "react-icons/fa";

function MovieDetails({ movie, onBack }) {
  if (!movie) return null;
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <button
        onClick={onBack}
        className="flex items-center gap-2 m-4 text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
        Back to results
      </button>
      <div className="md:flex">
        <div className="md:w-1/3 p-4">
          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No poster available</span>
            </div>
          )}
        </div>

        <div className="md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-2">
            {movie.Title} ({movie.Year})
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>{movie.imdbRating}/10</span>
            </div>
            <span>{movie.Runtime}</span>
            <span>{movie.Rated}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {movie.Genre.split(",").map((genre) => (
              <span
                key={genre}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {genre.trim()}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Plot</h2>
            <p>{movie.Plot}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Director</h2>
            <p>{movie.Director}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Cast</h2>
            <p>{movie.Actors}</p>
          </div>

          {movie.Ratings && movie.Ratings.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Ratings</h2>
              <ul className="space-y-2">
                {movie.Ratings.map((rating, index) => (
                  <li key={index}>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
