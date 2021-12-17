
import { useEffect, useState } from "react";
import axios from "axios";
import AddMovieForm2 from "../components/AddMovieForm";





const handleSubmit = async (e) => {
    e.preventDefault();

    const {

        name,
        description,
        price,
        imageUrl,
        startDate,
        endDate,
        movieCategory,
        producerId,
        cinemaId
    } = e.target.elements


    axios.post('https://localhost:5001/api/Movies/add', {

        name: name.value,
        description: description.value,
        price: price.value,
        imageUrl: imageUrl.value,
        startDate: startDate.value,
        endDate: endDate.value,
        movieCategory: movieCategory.value,
        producerId: parseInt(producerId.value),
        cinemaId: parseInt(cinemaId.value)
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    setTimeout(() => {
    }, 1000);


}
export default handleSubmit;


