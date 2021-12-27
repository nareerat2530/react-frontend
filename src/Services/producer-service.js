import axios from "axios";



const ProducerUrl = "/producer"

const GetProducers  = async () => {
    return axios({
        method: 'GET',
        url:ProducerUrl,
    }).then((response)=> {
        return  response.data;


    }).catch((error) => {
        if(error.response){
            return error.message

        }

    });

}

const ProducerService =  {



    GetProducers,
}
export default ProducerService ;


