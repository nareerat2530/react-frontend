import axios from "axios";

const ProducerUrl = "/producer";

const GetProducers = async () => {
  return axios({
    method: "GET",
    url: ProducerUrl,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.message;
      }
    });
};
const AddProducer = (producer) => {
  axios
      .post("https://localhost:5001/api/Producer/add", producer)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  setTimeout(() => {}, 1000);
};

const ProducerService = {
  GetProducers,
  AddProducer,
};
export default ProducerService;


