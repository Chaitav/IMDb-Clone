import Image from "next/image";

const API_KEY = process.env.API_KEY;

const getMovie = async (movieId: any) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  //   if (!res.ok) throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  return await res.json();
};

export default async function MoviePage({ params }: { params: any }) {
  const data: any = await getMovie(params.id);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Image Not Available !!"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{data.title || data.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {data.overview}
          </p>
          <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span>{data.release_date || data.first_air_date}</p>
          <p className="mb-3"><span className="font-semibold mr-1">Rating:</span>{data.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
