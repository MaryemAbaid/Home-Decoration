import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/home.jpg"

const Produits = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Produits' title='Les produits qui disponibles' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Produits
