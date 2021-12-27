import './Card.scss'
import React from "react";

const ModalCard = (props) => {

    return (
        <div className='card'>
            <img src={props.imageUrl} className='card__image' alt="Pictures"/>
                <h4 className='card__title'>{props.header}</h4>
                <p className='card__description'>{props.body}</p>
               <p className='card__price'>{props.footer}</p>
                <button className='card__btn'>View</button>
        </div>
            );
}
export default ModalCard