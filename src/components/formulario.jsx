import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {
    return (
        <div>
            <div style={{ margin: "10px 0 50px 0" }}>
                <h1 className='text-center text-secondary fw-bold'>Formulario</h1>
                <Form action="https://formsubmit.co/exclusivobagdance@gmail.com" method="POST" className='col-5 mx-auto mt-4'>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label for="nombre">Nombre</Form.Label>
                        <Form.Control id="nombre" type="name" placeholder="Ingresa un nombre" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label for="email">Email</Form.Label>
                        <Form.Control id="email" type="password" placeholder="Ingrese un email al cual comunicarnos" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label for="mensaje">Que queres decirnos?</Form.Label>
                        <Form.Control id="mensaje" type="text" placeholder="Escriba aqui" />
                    </Form.Group>

                    <Button className='btn-outline-secondary bg-white' variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>

            </div>
        </div>
    )
}

export default Formulario