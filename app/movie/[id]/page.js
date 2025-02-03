import MovieContainer from "@/containers/movie";
import React from "react";
import { notFound } from "next/navigation";
import { getMovieById } from "@/service/moviesService";

async function MoviePage ({ params }) {
  const movieDetail = await getMovieById(params.id)

  if(!movieDetail) {
    notFound()
  }
  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
};

export default MoviePage;