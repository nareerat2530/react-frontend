
import axios from "axios";



const CinemaUrl = "/Cinema"

const GetCinema  = async () => {
    return axios({
        method: 'GET',
        url:CinemaUrl,
    }).then((response)=> {
        return  response.data;


    }).catch((error) => {
        if(error.response){
            return error.message

        }

    });

}

const CinemaService =  {



    GetCinema,
}



export default CinemaService ;