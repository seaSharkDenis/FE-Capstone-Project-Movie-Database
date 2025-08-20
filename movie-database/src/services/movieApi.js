import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page: page,
    },
  });

  if (response.data.Response === "True") {
    return response.data.Search;
  } else {
    throw new Error(response.data.Error || "No movies found");
  }
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });

  if (response.data.Response === "True") {
    return response.data;
  } else {
    throw new Error(response.data.Error || "Movie details not found");
  }
};
