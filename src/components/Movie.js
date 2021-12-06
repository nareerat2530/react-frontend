import React, { useEffect, useState } from "react";
import ModalCard from "../UI/ModalCard";
import GetData from "../hooks/getData";
import DeleteData from "../hooks/DeleteData";

import { Button } from "react-bootstrap";



const Movie =(props) => {

    const data =  GetData('/Movies')
    const id = 6;
const message = DeleteData(`/Movies/remove-movie/${id}`);
 console.log('remove', message)

    return(
    <>

        <div className='wrapper'>
            {data && data.map(movie =>  <ModalCard
            key={movie.id}
            header={movie.name}
            body={movie.description}
            imageUrl={movie.imageUrl}
            footer={movie.price}/>)}

        </div>
        <button type="button" className="btn btn-secondary">Secondary</button>









    </>

    )
}
export default Movie;