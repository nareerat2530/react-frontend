import Select from 'react-select'
import './MovieForm.css'
import GetData from "../hooks/getData";
import useForm from "./useForm";
import Validate from "./Validation";
import React from "react";
import useInput from "./ResetForm";



const  AddMovieForm2 =  () => {
    const {handleChange,values,errors, handleSubmit} = useForm(Validate)

    const {value: name, bind: bindName, reset: resetName} = useInput('')
    const {value: description, bind: bindDescription, reset: resetDescription} = useInput('')
    const {value: price, bind: bindPrice, reset: resetPrice} = useInput('')
    const {value: imageUrl, bind: bindImageUrl, reset: resetImageUrl} = useInput('')
    const {value: startDate, bind: bindStartDate, reset: resetStartDate} = useInput('')
    const {value: endDate, bind: bindEndDate, reset: resetEndDate} = useInput('')
    const {value: movieCategory, bind: bindMovieCategory, reset: resetMovieCategory} = useInput('')
    const {value: cinemaId, bind: bindCinemaId, reset: resetCinemaId} = useInput('')
    const {value: producerId, bind: bindProducerId, reset: resetProducerId} = useInput('')



    const resetForm = () => {
        resetName();
        resetPrice();
        resetImageUrl();
        resetCinemaId();
        resetProducerId();
        resetStartDate();
        resetEndDate();
        resetMovieCategory();
        resetDescription();

    }

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
                        {...bindName}
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                    />
                    {errors.name && <p>{errors.name}</p>}



                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Description</label>
                    <textarea
                        className='form-input'
                        {...bindDescription}
                        type='text'
                        name='description'
                        id="description"
                        placeholder='Enter Description'


                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Price</label>
                    <input
                        className='form-input'
                        {...bindPrice}
                        min ='1'
                        type='number'
                        name='price'
                        placeholder='Enter price'



                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>ImageUrl</label>
                    <input
                        className='form-input'
                        {...bindImageUrl}
                        type='text'
                        name='imageUrl'
                        placeholder='Enter Image url'


                    />
                    {errors.imageUrl && <p>{errors.imageUrl}</p>}
                </div>



                <div className='form-inputs'>
                    <label htmlFor='form-label'>Start Date</label>
                    <input
                        className='form-input'
                        {...bindStartDate}
                        type='date'
                        name='startDate'
                        placeholder='Enter Start date'


                    />
                    {errors.startDate && <p>{errors.startDate}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>End Date</label>
                    <input
                        className='form-input'
                        {...bindEndDate}
                        type='date'
                        name='endDate'
                        placeholder='Enter End date'


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
                   {errors.cinemaId && <span>{errors.cinemaId}</span>}


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


