import { useEffect, useState } from "react";
import axios from "axios";



const GetData = (props) => {

    const [data, setData] = useState();
    const [error,setError] = useState();

    useEffect( ()=> {

            axios({
                method: 'GET',
                url:`${props}`,
            }).then((response)=> {
                const data = response.data
            setData(data);

            }).catch((error) => {
                if(error.response){
                    console.log(error.response);
                    console.log(error.response.headers);
                    console.log(error.response.status);
                }
                setError(error)
            });
            },[props]);
    if (error) return `Something went wrong: ${error.message}`;

 return data;



}
export default GetData;