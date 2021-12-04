import './Card.css'
import Card from "react-bootstrap/Card";
import {  Col, Row } from 'react-bootstrap'
import React from "react";
import Button from '../UI/Button'



const ModalCard = (props) => {
    return (

        <React.Fragment>
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

        </React.Fragment>



   
    );
}
export default ModalCard