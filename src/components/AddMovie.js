
import './MovieForm.css'

import {  useState } from "react";

import PostData from "../hooks/PostData";





const  AddMovieForm = () =>  {


    const [values,setValues] = useState();

   const data = PostData('/Movies/add')
    console.log(data)


    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleChange =(event) => {
        const {name,value} = event.target
        setValues({
            ...values, [name] : value
        })
    };




    return(
        <div className='form-content-right'>

            <form  onSubmit={handleSubmit} className='form' noValidate>
                <h2>Add a new movie</h2>
                <div className='form-inputs'>
                    <label htmlFor='form-label'>Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                     /* value={values.name}*/
                       onChange={handleChange}

                    />

                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>Description</label>
                    <textarea
                        className='form-input'
                        type='text'
                        name='description'
                        placeholder='Enter Description'
                      /*  value={values.description}*/
                        onChange={handleChange}
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>Price</label>
                    <input
                        className='form-input'
                        type='number'
                        name='price'
                        placeholder='Enter price'
                      /* value={values.price}*/
                        onChange={handleChange}
                        required

                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='form-label'>Image</label>
                    <input
                        className='form-input'
                        type='text'
                        name='imageUrl'
                        placeholder='Enter Image url'
                       /*value={values.imageUrl}*/
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-inputs'>
                        <label htmlFor='form-label'>Actor Id</label>
                        <input
                            className='form-input'
                            type='number'
                            name='actorId'
                            placeholder='Enter Actor id'
                          /* value={values.actorId}*/
                            onChange={handleChange}
                            required

                        />
                </div>

                <div className='form-inputs'>
                            <label htmlFor='form-label'>Movie Category</label>
                            <input
                                className='form-input'
                                type='number'
                                name='movieCategory'
                                placeholder='Enter Movie Category'
                                /*value={values.movieCategory}*/
                                onChange={handleChange}
                                required


                            />
                </div>

                <div className='form-inputs'>
                                <label htmlFor='form-label'>Start Date</label>
                                <input
                                    className='form-input'
                                    type='date'
                                    name='startDate'
                                    placeholder='Enter Start date'
                                   /*value={values.startDate}*/
                                    onChange={handleChange}
                                    required


                                />
                </div>

                <div className='form-inputs'>
                                    <label htmlFor='form-label'>End Date</label>
                                    <input
                                        className='form-input'
                                        type='date'
                                        name='endDate'
                                        placeholder='Enter End date'
                                        /*value={values.endDate}*/
                                        onChange={handleChange}
                                        required

                                    />
                </div>

                <div className='form-inputs'>
                                        <label htmlFor='form-label'>Producer Id</label>
                                        <input
                                            className='form-input'
                                            type='text'
                                            name='producerId'
                                            placeholder='Enter Producer Id'
                                           /*value={values.producerId}*/
                                            onChange={handleChange}
                                            required

                                        />
                </div>
                                        <div className='form-inputs'>
                                            <label htmlFor='form-label'>Cinema Id</label>
                                            <input
                                                className='form-input'
                                                type='text'
                                                name='cinemaId'
                                                placeholder='Enter Cinema Id'
                                                /*value={values.cinemaId}*/
                                                onChange={handleChange}
                                                required
                                            />

                </div>
                <button className='form-input-btn' type='submit'>
                    Add
                </button>
            </form>
        </div>
    );


};

export default AddMovieForm;


