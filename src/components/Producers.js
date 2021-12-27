import React, { useEffect, useState } from "react";
import ModalCard from "../UI/ModalCard";
import ProducerService from "../Services/producer-service";

const Producers = () => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function GetProducers() {
      let response = await ProducerService.GetProducers();
      dataSet(response);
    }

    GetProducers();
  }, []);

  return (
    <div className="wrapper">
      {data &&
        data.map((producer) => (
          <ModalCard
            key={producer.id}
            header={producer.fullName}
            body={producer.bio}
            imageUrl={producer.imageURL}
          />
        ))}
    </div>
  );
};
export default Producers;

