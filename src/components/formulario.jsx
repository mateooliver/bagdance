import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {
  return (
    <div>
        <div style={{margin:"10px 0 50px 0"}}>
            <h1 className='text-center text-secondary fw-bold'>Formulario</h1>
            <Form className='col-5 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Ingresa un nombre" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese un email al cual comunicarnos" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Que queres decirnos?</Form.Label>
                    <Form.Control  type="text" placeholder="Escriba aqui" />
                </Form.Group>
                
                <Button className='btn-outline-secondary bg-white'  variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>

        </div>
    </div>
  )
}

export default Formulario