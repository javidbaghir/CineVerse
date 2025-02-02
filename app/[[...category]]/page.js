import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

export default function Home({ params }) {
  let selectedCategory;
  console.log(params?.category)

  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results?.slice(0, 6) : [],
      }}
    />
  );
}
