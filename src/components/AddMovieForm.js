import Select from 'react-select'
import './MovieForm.css'
import GetData from "../hooks/getData";
import useForm from "./useForm";
import Validate from "./Validation";
import React from "react";


const  AddMovieForm2 =  () => {
    const {handleChange,values,errors, handleSubmit} = useForm(Validate)

    const producerOptions = [];
    const cinemaOptions = [];


const getAllData = () => {
    if (producerData !== undefined){
        producerData.forEach(producer => producerOptions.push({value: producer.id, label: producer.fullName}));
    }
    const cinemaData =  GetData('/Cinema');
    if(cinemaData !== undefined){
        cinemaData.forEach(Cinema => cinemaOptions.push({value: Cinema.id, label: Cinema.name}));
    }

    return "done";
}
const producerData =  GetData('/Producer');

  const isItDone = getAllData()

    return (

        <div className='form-content-right'>
            <form className='form' noValidate onSubmit={handleSubmit }  >
                <h2>Add a new movie</h2>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Name</label>
                    <input
                        className='form-input'
                        id="name"
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}



                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Description</label>
                    <textarea
                        className='form-input'
                        type='text'
                        name='description'
                        id="description"
                        placeholder='Enter Description'
                        value={values.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Price</label>
                    <input
                        className='form-input'
                        min ='1'
                        type='number'
                        name='price'
                        placeholder='Enter price'
                        value={values.price}
                        onChange={handleChange}
                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Image</label>
                    <input
                        className='form-input'
                        type='text'
                        name='imageUrl'
                        placeholder='Enter Image url'
                        value={values.imageUrl}
                        onChange={handleChange}
                    />
                    {errors.imageUrl && <p>{errors.imageUrl}</p>}
                </div>



                <div className='form-inputs'>
                    <label htmlFor='form-label'>Start Date</label>
                    <input
                        className='form-input'
                        type='date'
                        name='startDate'
                        placeholder='Enter Start date'
                        value={values.startDate}
                        onChange={handleChange}
                    />
                    {errors.startDate && <p>{errors.startDate}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>End Date</label>
                    <input
                        className='form-input'
                        type='date'
                        name='endDate'
                        placeholder='Enter End date'
                        value={values.endDate}
                        onChange={handleChange}
                    />
                    {errors.endDate && <p>{errors.endDate}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>Producer Id</label>
                    <Select name="producerId" options={producerOptions} />
                    {errors.producerId && <span>{errors.producerId}</span>}
                </div>
               <div className='form-inputs'>
                    <label htmlFor='form-label'>Cinema Id</label>
                    <Select name='cinemaId' options ={cinemaOptions} />
                   {errors.producerId && <span>{errors.producerId}</span>}

                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label' >Movie Category</label>
                    <select name='movieCategory'  >
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

                <button className='form-input-btn' type='submit'>
                    Add
                </button>
                <button className='form-input-btn' type='cancel'>
                Cancel
                </button>
            </form >

        </div>
    );



};

export default AddMovieForm2;


