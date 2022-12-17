import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='à propos de nous' title='Qui nous sommes?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Notre Contenu :' subtitle='Apprenez à nous connaître et à connaître nos produits'/>

            <p>H&D est ub site web de vente de meubles et d'accessoires pour la maison prêts à monter importés Turquie.
            La marque du site est une abréviation des initiales de mot "Home Decoration"
            </p>
            <p>L'idée est venue de l'océan, où les gens sont intéressés par l'achat de meubles de maison classiques, calmes et luxeux, mais ils recherchent des meubles pliables pour économiser de l'espace avec leurs maisons, et H&D leur fournira cela à un prix approprié et à faible coût de livraison.</p>
          </div>
          <div className='right row'>
            <img src='./home.1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}
export default About
