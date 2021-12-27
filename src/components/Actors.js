import ModalCard from "../UI/ModalCard";
import { useEffect, useState } from "react";
import ActorService from "../Services/actors-service";

const Actors = () => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function GetActors() {
      let response = await ActorService.GetActors();
      dataSet(response);
    }

    GetActors();
  }, []);

  return (
    <div className="wrapper">
      {data &&
        data.map((actor) => (
          <ModalCard
            key={actor.id}
            header={actor.fullName}
            body={actor.bio}
            imageUrl={actor.imageURL}
          />
        ))}
    </div>
  );
};
export default Actors;