import ModalCard from "../UI/ModalCard";
import MovieService from "../Services/movie-service";
import { useEffect, useState } from "react";

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
          <ModalCard
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