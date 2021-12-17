import './Card.scss'
import React from "react";

const ModalCard = (props) => {

    return (



        <div className='card'>


            <img src={props.imageUrl} className='card__image' alt="Pictures"/>
                <h2 className='card__title'>{props.header}</h2>
                <p className='card__description'>{props.body}</p>
                <p className='card__description'>{props.footer}</p>
                <button className='card__btn'>View Movie</button>


</div>
            );


}
export default ModalCard