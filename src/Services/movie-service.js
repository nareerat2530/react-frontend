import axios from "axios";

const MovieUrl = "/movies";

const AddMovie = (movie) => {
  axios
    .post("https://localhost:5001/api/Movies/add", movie)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setTimeout(() => {}, 1000);
};

const GetMovies = async () => {
  return axios({
    method: "GET",
    url: MovieUrl,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.message;
      }
    });
};

const MovieService = {
  AddMovie,
  GetMovies,
};


export default MovieService;