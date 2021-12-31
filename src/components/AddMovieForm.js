import Select from "react-select";
import "./MovieForm.css";

import React, { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
import MovieService from "../Services/movie-service";
import { useNavigate } from "react-router-dom";
import CinemaService from "../Services/cinema-service";
import ProducerService from "../Services/producer-service";

const AddMovieForm = () => {
  const [producers, setProducers] = useState([]);
  const [cinemas, setCinemas] = useState([]);

  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const {
    value: description,
    bind: bindDescription,
    reset: resetDescription,
  } = useInput("");
  const { value: price, bind: bindPrice, reset: resetPrice } = useInput("");
  const {
    value: imageUrl,
    bind: bindImageUrl,
    reset: resetImageUrl,
  } = useInput("");
  const {
    value: startDate,
    bind: bindStartDate,
    reset: resetStartDate,
  } = useInput("");
  const {
    value: endDate,
    bind: bindEndDate,
    reset: resetEndDate,
  } = useInput("");

  useEffect(() => {
    async function GetDataOptions() {
      let producerResponse = await ProducerService.GetProducers();
      setProducers(producerResponse);
      let cinemaResponse = await CinemaService.GetCinema();
      setCinemas(cinemaResponse);
    }

    GetDataOptions();
  }, []);

  const resetForm = () => {
    resetName();
    resetPrice();
    resetImageUrl();
    resetStartDate();
    resetEndDate();
    resetDescription();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let movie = {
      name,
      description,
      price,
      imageUrl,
      startDate,
      endDate,
    };
    MovieService.AddMovie(movie);
    alert("Submitted Successfully");
    resetForm();
  };

  const producerOptions = [];
  const cinemaOptions = [];

  producers.forEach((producer) =>
    producerOptions.push({ value: producer.id, label: producer.fullName })
  );
  cinemas.forEach((Cinema) =>
    cinemaOptions.push({ value: Cinema.id, label: Cinema.name })
  );

  const navigate = useNavigate();

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new movie</h2>
        <div className="form-inputs">
          <label htmlFor="form-label">Name</label>
          <input
            className="form-input"
            {...bindName}
            type="text"
            name="name"
            placeholder="Enter Name"
            required={true}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Description</label>
          <textarea
            className="form-input"
            {...bindDescription}
            name="description"
            id="description"
            placeholder="Enter Description"
            required={true}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Price</label>
          <input
            className="form-input"
            {...bindPrice}
            min="1"
            type="number"
            name="price"
            placeholder="Enter price"
            required={true}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="form-label">Start Date</label>
          <input
            className="form-input"
            {...bindStartDate}
            type="date"
            name="startDate"
            placeholder="Enter Start date"
            required={true}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">End Date</label>
          <input
            className="form-input"
            {...bindEndDate}
            type="date"
            name="endDate"
            placeholder="Enter End date"
            required={true}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="form-label">Producer Id</label>
          <Select name="producerId" options={producerOptions} />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Cinema Id</label>
          <Select name="cinemaId" options={cinemaOptions} />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Image Url</label>
          <input
            className="form-input"
            {...bindImageUrl}
            type="text"
            name="imageUrl"
            placeholder="Enter Image Url"
            required={true}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Movie Category</label>
          <select name="movieCategory">
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>

        <button className="form-input-btn" type="submit">
          Add
        </button>
        <button
          className="form-input-btn"
          type="cancel"
          onClick={() => navigate("/movies")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
