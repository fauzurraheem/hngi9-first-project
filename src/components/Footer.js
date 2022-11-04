import React from 'react'
import i4g from '../assets/I4G.svg'
import vector from '../assets/Vector.svg'
import './footer.css'

const Footer = () => {
  return (
    <section className='bottomContainer'>
      <div className='bBody'>
        <div className='bContent'>
          <img src={vector} className="zuri" alt=""/>
          <p className='bottomP'>HNG Internship 9 Frontend Task</p>
          <img src={i4g} className="hng" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Footer