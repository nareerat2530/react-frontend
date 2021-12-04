import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ModalCard from "../UI/ModalCard";
import GetData from "../hooks/getData";


const Actors = () => {


    const data =  GetData('/Actors')

    return(

        <Container>
            <Row>
                <Col lg={true}/>
                {data && data.map(actor=> <ModalCard
                    key={actor.id}
                    header={actor.FullName}
                    body={actor.bio}
                    imageUrl={actor.imageURL}
                    />)}
            </Row>
        </Container>



    )
}
export default Actors;