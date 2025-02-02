import CategoriesLoading from "../../components/categories/loading";
import FeatureMovieLoading from "../../components/featured-movie/loading";
import MoviesSectionLoading from "../../components/movies-section/loading";
import React from "react";

const HomeLoading = () => {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
};

export default HomeLoading;
