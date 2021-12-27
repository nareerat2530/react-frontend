
import axios from "axios";



const ActorUrl = "/actors"

const GetActors  = async () => {
    return axios({
        method: 'GET',
        url:ActorUrl,
    }).then((response)=> {
        return  response.data;


    }).catch((error) => {
        if(error.response){
            return error.message
        }

    });

}

const ActorService =  {



    GetActors,
}



export default ActorService ;