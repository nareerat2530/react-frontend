import './Card.scss'
import React from "react";

const ModalCard = (props) => {
    return (

        /*<React.Fragment>
            <Card className='card'>
            <Card.Img variant="top" src={props.imageUrl}  class="rounded mx-auto d-block" alt="..." style={{width: '100%', height:'auto'}}/>
            <Card.Body>
                <Card.Title>{props.header}</Card.Title>
                <Card.Title>{props.body}</Card.Title>
                <Card.Title>{props.footer}</Card.Title>

                <Button variant="primary">Add</Button>
                <Button variant="primary">Remove</Button>
            </Card.Body>
        </Card>

        </React.Fragment>*/

        <div className='card'>


            <div className='class__body'>


                <img src={props.imageUrl} className='card__image'/>
                <h2 className='card__title'>{props.header}</h2>
                <p className='card__description'>{props.body}</p>
                <p className='card__price'>{props.footer}</p>
                <button className='card__btn'>View Movie</button>

        </div>
</div>
            );


}
export default ModalCard