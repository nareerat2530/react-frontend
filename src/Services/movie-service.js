import React from "react";
import axios from "axios";



const MovieUrl = "/movies"

const AddMovie = (movie) =>{


    axios.post('https://localhost:5001/api/Movies/add', movie

    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    setTimeout(() => {
    }, 1000);
}

const GetMovies  = async () => {
     axios({
        method: 'GET',
        url:MovieUrl,
    }).then((response)=> {
        return  response.data;


    }).catch((error) => {
        if(error.response){
            return error.message
             console.log(error.response);
             console.log(error.response.headers);
             console.log(error.response.status);
        }

    });

}

const MovieService =  {


    AddMovie,
    GetMovies,
}



export default MovieService ;