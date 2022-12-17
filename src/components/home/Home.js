import React from "react"
import Recent from "./recent/Recent"
import Back from "../common/Back"
import img from "../images/home.1.jpg"
 

const Home = () => {
  return (
    <>
    <section className=''>
        <Back name='H&D' title="Home Decoration" cover={img} />
      </section>
      <Recent />
       
     
      
    </>
  )
}

export default Home
