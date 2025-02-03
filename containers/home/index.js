import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  popularMovies = [],
  topRated = [],
  selectedCategory,
  genres,
}) => {
  return (
    <div>
      <FeaturedMovie movie={topRated?.[9]} />
      <Categories categories={genres.slice(0, 5)} />
      {selectedCategory.movies?.length > 0 && (
        <MoviesSection
          title={
            genres.find((genre) => `${genre.id}` === selectedCategory.id).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title={"Popular Films"}
        movies={popularMovies.slice(1, 7)}
      />
      <MoviesSection title={"Top Rated"} movies={topRated.slice(1, 7)} />
    </div>
  );
};

export default HomeContainer;
