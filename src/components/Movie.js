import MovieService from "../Services/movie-service";
import { useEffect, useState } from "react";
import MoVieCard from "../UI/MovieCard";

const Movie = () => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function GetMovie() {
      let response = await MovieService.GetMovies();
      dataSet(response);
    }

    GetMovie();
  }, []);

  return (
    <div className="wrapper">
      {data &&
        data.map((movie) => (
          <MoVieCard
            key={movie.id}
            header={movie.name}
            body={movie.description}
            imageUrl={movie.imageUrl}
            footer={movie.price}
          />
        ))}
    </div>
  );
};
export default Movie;
