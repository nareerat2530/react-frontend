
import ModalCard from "../UI/ModalCard";
import GetData from "../Services/getData";


const Actors = () => {


    const data =  GetData('/Actors')

    return(

        <div className='wrapper'>
                {data && data.map(actor=> <ModalCard
                    key={actor.id}
                    header={actor.fullName}
                    body={actor.bio}
                    imageUrl={actor.imageURL}
                    />)}
        </div>

    )
}
export default Actors;