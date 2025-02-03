// class PopularMovie {

// }

// export default new PopularMovie();

export const getTopRatedMovie = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const getPopularMovie = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const getGenres = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const getCategoryMoviesById = async (genreId) => {
  const res = await fetch(
    `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const getMovieById = async (movieId) => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};


