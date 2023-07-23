import React from 'react'
import './Hero.css'
import { ReactDOM } from 'react'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero from '../../assets/hero_image.png'
import heroBack from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition={type:'spring',duration:3}
  return (
    
    <div className="hero">
       
        <div className="left-h">
            <Header />
        {/*The best ad*/}
            <div className="the-best-ad">
                
                <motion.div
                initial={{left:'250px'}}
                whileInView={{left:'9px'}}
                transition={{...transition,type:'tween'}}
                >
                </motion.div>
                <span>el mejor club deportivo de tu ciudad</span>
            </div>
        {/*Hero Heading*/}
            <div className='hero-text'>
                
                <div>
                    <span className='stroke-text'>da forma </span>
                    <span>a tu</span>
                </div>
                <div>
                    <span>cuerpo ideal</span>
                </div>
                <div >
                    <span>
                         In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                 </div>
            </div>

            <div className="figures">
                <div>
                    <span className='number' >+<NumberCounter  end={140} delay={2} /></span>
                    <span >entrenadores expertos</span>
                </div>
                <div>
                    <span className='number'>+<NumberCounter end={978} delay={2}/></span>
                    <span>miembros unidos</span>
                </div>
                <div>
                    <span className='number'>+<NumberCounter end={50} delay={2}/></span>
                    <span>programas deportivos</span>
                </div>

            </div>

            <div className="hero-buttons">
                <button className='btn'>Iniciar Sesion</button>
                <button className='btn'>Registrate</button>
            </div>
        </div>
        <div className="rigth-h">
            <button className='btn'>Unete Ahora</button>
            <motion.div 
           initial={{left:"17rem"}}
           whileInView={{left:"14rem"}}
           transition={transition}
            className="hate-rate">
                <img src={Heart} alt="" /> 
                <span>Ritmo Cardiaco</span>
                
                <span>116 bpm</span>
            </motion.div>
            {/*Hero Images*/}
            <img src={hero} alt=""  className='hero-image'/>
            <motion.img
            initial={{right:"15rem"}}
            whileInView={{right:"24rem"}}
            transition={transition}
            src={heroBack} alt="" className='hero-image-back'/>
            <motion.div 
            initial={{right:"35rem"}}
            whileInView={{right:"30rem"}}
            transition={transition}
            className="calories">
                <img src={calories} alt="" />
                <div className='calories_details'>
                    <span>Calorias Quemadas</span>
                    <span>220 kcal</span>
                </div>
                
            
            </motion.div>
        
        </div>
        
     

    </div>
  )
}

export default Hero