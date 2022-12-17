import React from "react"
import img from "../images/contact.png"
import Back from "../common/Back"
import "./contact.css"
import Login from "../Login/Login"
 
 
 

const Contact = () => {
   
  return (
    <>
      <section className='contact mb'>
        <Back name='Nous Contacter' title="Obtenir de l'aide " cover={img} />
      </section>
      <Login />
     
    </>
    
    
  )
}

export default Contact
