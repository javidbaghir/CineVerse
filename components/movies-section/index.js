import React from "react";
import styles from "../movies-section/style.module.css";
import Link from "next/link";
import Image from "next/image";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className={styles.movieSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
