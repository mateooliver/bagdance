import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Bolsos = () => {
  return (
    <div>
        <div>
            <h1 className='text-secondary text-center fw-bold mt-4'>Conoce nuestras Bagdance</h1>
        </div>
        {/* aca ver si hacemos con un for y un array o si hacemos cada tarjeta y modal a parte.  aca abajo pongo una a modo ejemplo*/}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../img/bolso1.jpg")} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Bolsos