import React from "react";
import ModalCard from "../UI/ModalCard";
import GetData from "../Services/getData";


const Producers = () => {
    const data =  GetData('/Producer')

    return(
    <div className='wrapper'>
               {data && data.map(producer=> <ModalCard
                    key={producer.id}
                    header={producer.fullName}
                    body={producer.bio}
                    imageUrl={producer.imageURL}
                />)}
    </div>

    )
}
export default Producers;

