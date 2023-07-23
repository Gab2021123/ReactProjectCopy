import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'



 const Program = () => {
  return (
    <div className='Program' id='Programs'>
      <div className="blur program-blur-left"></div>
        <div className='programs-header'>
            <span className='stroke-text'>explora</span>
            <span>programas</span>
            <span className='stroke-text'>formandote</span>

        </div>
        <div className='programs-categories'>
            {programsData.map((program)=>(
                <div className="category">
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                    <div className="join-now">
                      <span>Join Now</span>
                      <img src={rightArrow} alt="" />
                    </div>
                </div>
            ))}
           
        </div>
    </div>

  )
}
export default Program
