import React from 'react'

const Footer = () => {
  return (
    <div>
      <div style={{height:"150px", backgroundColor:"#A2C5DB", }}>
        <div className='text-center fs-3 fw-bold text-secondary '>
          <p style={{paddingTop:"20px"}}>Seguinos</p>
          <div className='d-flex justify-content-center'>
            <img style={{height:"25px", width:"25px"}} src={require("../img/facebook.png")} alt="" />
            <img style={{height:"25px", width:"25px"}} className="mx-2" src={require("../img/instagram.png")} alt="" />
            <img style={{height:"25px", width:"25px"}} src={require("../img/whatsapp.png")} alt="" />

          </div>
        </div>
 

      </div>
    </div>
  )
}

export default Footer