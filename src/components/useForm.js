
/*
import {useState, useEffect} from "react";




const useForm = () => {
    const [values,setValues] = useState({
        name:'',
        description:'',
        price:'',
        imageUrl:'',
        actorId:'',
        movieCategory:'',
        startDate:'',
        endDate:'',
        producerId:'',
        cinemaId:'',
    })

    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange =(event) => {
        const {name,value} = event.target
        setValues({
            ...values, [name] : value
        })
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors()
        setIsSubmitting(true)
    };
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {

            }
        },
        [errors]
    );
    return {handleChange,values, handleSubmit,errors};
};
export default useForm;
*/
