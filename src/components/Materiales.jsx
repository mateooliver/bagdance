import React from 'react'

const Materiales = () => {
  return (
    <div className='col-xl-10 mx-auto mt-4'>
      <div >
        <div className='d-flex text-start'>
          <img style={{ height: '250px', width: '500px', borderRadius: "10px", margin: "auto 20px auto auto" }} src='/img/materiales.png' alt="Nuestra Historia" />
          <div className='my-auto'>
            <h1 className='text-start my-2 text-secondary'>Materiales pensados especificamente para nuestra pasion: la danza</h1>
            <p style={{ fontSize: "15px", }}>Los productos de Bagdance fueron pensados para que sean una extensión del bailarín. Por eso, se eligieron textiles livianos y suaves, pero resistentes.
              Los bolsos, las mochilas y las carteras gracias a la bondad de sus telas,quedan marcados al doblarlos para guardarlos.
              A su vez, cada diseño de Bagdance está sublimado, lo que permite una mayor durabilidad en los colores. En ellos hay personajes e ilustraciones alegres con características de la disciplina de baile que representan.
              Las telas internas, además, son impermeables, lo que ayuda a que al guardar las prendas usadas en los compartimentos especiales, el resto de ellas no queden humedecidas.
              Cada uno de nuestros productos cuentan con gran capacidad para acomodar y separar los vestuarios y los calzados.
              También, todos los Bagdance tienen ojales de respiración para que el aire circule por dentro y no contamine con olor a humedad.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Materiales