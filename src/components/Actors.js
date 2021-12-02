import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ModalCard from "../UI/ModalCard";


const Actors = () => {


    const [actors, setActors] = useState(null);
    useEffect(()=> {
        getActors()
    }, []);
    const getActors = () =>  {
        axios({
            method: 'GET',
            url: '/actors',
        }).then((response)=> {
            const data = response.data
            console.log(data);
            setActors(data)
        }).catch((error) => {
            if(error.response){
                console.log(error.response);
                console.log(error.response.headers);
                console.log(error.response.status);
            }
        });

    };


    return(

        <Container>
            <Row>
                <Col lg={true}/>
                {actors && actors.map(actor=> <ModalCard
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