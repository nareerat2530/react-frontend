/*import React, { useEffect, useState } from "react";*/
import axios from "axios";
import { useEffect, useState } from "react";


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

    },[props])
    return data;


}
export default DeleteData;