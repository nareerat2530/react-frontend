
import ModalCard from "../UI/ModalCard";
import GetData from "../Services/getData";
import MovieService from "../Services/movie-service";
import { useEffect, useState } from "react";
import { set } from "mobx";
/*
import DeleteData from "../hooks/DeleteData";
*/

const Movie =  (props) => {


    const [data, dataSet] = useState([])

    useEffect(async () => {

            let response = await MovieService.GetMovies()

            dataSet(response)



    }, [])










    return(

        <div className='wrapper'>
            {data && data.map(movie =>  <ModalCard
            key={movie.id}
            header={movie.name}
            body={movie.description}
            imageUrl={movie.imageUrl}
            footer={movie.price}/>)}

        </div>
    )
}
export default Movie;