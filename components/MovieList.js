import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const MovieList = ({ movies }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </FlipMove>
  );
};

export default MovieList;
