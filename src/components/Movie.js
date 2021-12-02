import MovieCard from "../UI/ModalCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Col, Container, Row } from "react-bootstrap";


const Movie =(props) => {
    const [movies, setMovie] = useState();
    useEffect(()=> {
        getMovies()
    }, []);
    const getMovies = () =>  {
        axios({
            method: 'GET',
            url: '/movies',
        }).then((response)=> {
         const data = response.data
         console.log(data);
            setMovie(data)
        }).catch((error) => {
            if(error.response){
                console.log(error.response);
                console.log(error.response.headers);
                console.log(error.response.status);
            }
        });

    };


    return(

        <Container>
            <Row>
                <Col lg={true}/>

        {movies && movies.map(movie=> <MovieCard
            key={movie.id}
            header={movie.name}
            body={movie.description}
            imageUrl={movie.imageUrl}
            footer={movie.price}/>)}

            </Row>
        </Container>


    )
}
export default Movie;