import Image from "next/image";
import { forwardRef } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        height={1080}
        width={1920}
        src={`${BASE_URL}${result?.backdrop_path || result?.poster_path}`}
        alt="movie-image"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0  group-hover:opacity-100 hover:text-gray-100">
          {""}
          {result.release_date}
          {""}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
