import React, { useEffect, useState } from "react";
import axios from "axios";


const DeleteData = (props) => {
    const[data, setData] = useState();

    useEffect(() => {
        axios({
            method: 'DELETE',
            url:`${props}`,
        }).then((response)=> {
            const data = response.data
            setData(data);
        });

    },[])

}
export default DeleteData;