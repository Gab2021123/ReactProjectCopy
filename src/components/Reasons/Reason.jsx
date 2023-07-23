import React from 'react'
import './Reason.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import Tick from "../../assets/tick.png";
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
const Reason = () => {
  return (
    <div className='Reasons' id='Reasons'>

        <div className='left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className='rigth-r'>
               <span>más razones</span>
               <span>
                <span className='stroke-text'>porque </span>
                <span>escogernos ?</span>
               </span>
               <div className='reasons'>
                  <span><img src={Tick}  alt="" /> más de 140 profesores expertos</span>
                  <span><img src={Tick} alt="" />entrena más rapido e inteligente</span>
                  <span><img src={Tick} alt="" />1 programa gratis para nuevo miembro</span>
                  <span><img src={Tick} alt="" />socios confiables</span>
               </div>

            <div className='our_partners'>
             <span>nuestros patricinadores</span>
             
                <img src={nb} alt="" /> 
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
              
          
            </div>    
        </div>
    </div>
  )
}
export default Reason
