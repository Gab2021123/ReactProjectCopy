import React, { useState } from 'react'
import './Testimonials.css'
import {  } from "../../";
import  {testimonialsData } from "../../data/testimonialsData";
import rigthArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"
import {motion} from 'framer-motion'
const Testimonials =()=> {
   const [selected,setSelected]=useState(0);
   const testimonialsLongitud=testimonialsData.length;
   //Transicion para los motion-Frame
   const transition={type:'spring',duration:3}
  return (
    <div className='testimonials'>
    
      <div className='left-t'>
        <span>Testimonios</span>
        <span className='stroke-text'>¿que cuentas?</span>
        <span className='stroke text'>Sobre nosotros</span>
        {
          //Mi primer motion
        }
        <motion.span
        key={selected}
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:100}}
      transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <p className='descriptionPerson'>
           <p>{testimonialsData[selected].name}</p>-
           <p>{testimonialsData[selected].status}</p>
        </p>
      </div>
      
      <div className='rigth-t'>
      {
          //Mi segundo motion
        }
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
         {
          //Mi tercer motion
        }
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
         {
          //Mi cuarto motion
        }
      <motion.img 
      key={selected}
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:100}}
      transition={transition}
      src={testimonialsData[selected].image} alt="Imagen del testimonio" />
      <div className='arrows'>
        <img
          onClick={()=>{
            selected===0?
            setSelected(testimonialsLongitud-1):
            setSelected((prev)=>prev-1)
          }}
          src={leftArrow} alt="" />
      
        <img
        onClick={
          ()=>{
           selected===testimonialsLongitud-1?
           setSelected(0):
           setSelected((prev)=>prev+1)
          }
        }
        src={rigthArrow} alt="" />
      </div>
      </div>

    </div>
  )
}

export default Testimonials