import React from 'react'
import './PlanContainer.css'
import   {plansData}  from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import rigthArrow from '../../assets/rightArrow.png'

const PlanContainer = () => {
  return (
      <div className='Plan-Container' id='Plan-Container'>
         <div className="blur planContainer-blur-left"></div>
         <div className="blur planContainer-blur-rigth"></div>
        <div className='programs-header'>
            <span className='stroke-text'>listos para</span>
            <span>tu jornada</span>
            <span className='stroke-text'>ahora con nostros</span>
        </div>
        <div className='plans'>
              
                {plansData.map((plan,i)=>(
                  <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    <div className='features'>
                      {plan.features.map((feature,i)=>(
                        <div className='feature'>
                          <img src={whiteTick} alt="" />
                          <span key={i}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className='benefits'>
                       <span>Ver más beneficios  </span>
                       <img src={rigthArrow} alt="" />
                    </div>
                    <button >
                        Unirse ahora
                    </button>
                  </div>
                ))}
             
              
            
        </div>
      </div>
  )
}

export default PlanContainer
