import Head from "next/head";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie-watch-next</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <MovieList movies={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3/${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
