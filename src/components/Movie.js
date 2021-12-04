import MovieCard from "../UI/ModalCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ModalCard from "../UI/ModalCard";
import GetData from "../hooks/getData";
import DeleteData from "../hooks/DeleteData";


const Movie =(props) => {

    const data =  GetData('/Movies')
    const id = 6;
const message = DeleteData(`/Movies/remove-movie/${id}`);
 console.log('remove', message)
    return(

        <Container>
            <Row>
                <Col lg={true}/>

                {data && data.map(movie =>  <ModalCard
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