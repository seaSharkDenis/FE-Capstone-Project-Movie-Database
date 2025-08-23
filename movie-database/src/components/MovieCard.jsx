import React from "react";

function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect(movie.imdbID)}
      className="cursor-pointer bg-gray-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        {movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">No poster available</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
