import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import ModalCard from "../UI/ModalCard";


import GetData from "../hooks/getData";



const Producers = () => {


const data =  GetData('/Producer')




return(
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={true}/>
               {data && data.map(producer=> <ModalCard
                    key={producer.id}
                    header={producer.FullName}
                    body={producer.bio}
                    imageUrl={producer.imageURL}
                />)}
            </Row>
        </Container>
    </React.Fragment>




    )
}
export default Producers;

