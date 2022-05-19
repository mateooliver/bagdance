import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Bolsos = () => {
  return (
    <div className='row col-xl-10 d-flex justify-content-evenly mx-auto'>
        <div>
            <h1 className='text-secondary text-center fw-bold mt-4'>Conoce nuestras Bagdance</h1>
        </div>
        
        <Card className='col-xl-4 mx-1 my-5'>
            <Card.Img variant="top" src="/img/bolso1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card className='col-xl-4 mx-1 my-5'>
            <Card.Img variant="top" src="/img/bolso1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card className='col-xl-4 mx-1 my-5'>
            <Card.Img variant="top" src="/img/COL_5070.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card className='col-xl-4 mx-1 my-5'>
            <Card.Img variant="top" src="/img/bolso1.jpg" />
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