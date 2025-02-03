import HomeContainer from "@/containers/home";
import {
  getPopularMovie,
  getTopRatedMovie,
  getGenres,
  getCategoryMoviesById,
} from "@/service/moviesService";

async function Home({ params }) {
  let selectedCategory;
  const topRatedPromise = getTopRatedMovie();
  const popularMoviesPromise = getPopularMovie();
  const genresList = getGenres();

  const [
    { results: topRated },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularMoviesPromise, genresList]);

  if (!!params.category?.length) {
    const { results } = await getCategoryMoviesById(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      topRated={topRated}
      popularMovies={popularMovies}
      genres={categories}
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory?.slice(0, 6) : [],
      }}
    />
  );
}

export default Home;
