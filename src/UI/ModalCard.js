import './Card.css'
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from 'react-bootstrap'
import React from "react";
const ModalCard = (props) => {
    return (

        <React.Fragment>
            <Card className='card'>
            <Card.Img variant="top" src={props.imageUrl}  class="rounded mx-auto d-block" alt="..." style={{width: '100%', height:'auto'}}/>
            <Card.Body>
                <Card.Title>{props.header}</Card.Title>
                <Card.Title>{props.body}</Card.Title>
                <Card.Title>{props.footer}</Card.Title>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        </React.Fragment>



      /*  <Card style={{ flex: 1}}>
            <Row className='no-gutters'>
                <Col md={5} lg={5}  >
                    <Card.Img variant="top" src={props.imageUrl} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>*/
    );
}
export default ModalCard