import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <section className='tSection'>
        <div className='tContainer'>
          <div className='tHead'>
            <h2 className='t-h2'>Contact Me
            </h2>
            <p className='t-p'>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>
        </div>
      </section>
      <section className='mSection'>
        <div className='mContainer'>
          <form className='mForm'>
            <div className='mInputs'>
              <label for=''>First name</label>
              <input className='textInputs' type='text' placeholder=' Enter your first name' />
            </div>
            <p></p>
            <div className='mInputs'>
              <label for=''>Last name</label>
              <input className='textInputs' type='text' placeholder=' Enter your last name' />
            </div>
            <div className='mInputs'>
              <label for=''>Email</label>
              <input className='textInputs' type='text' placeholder=' Enter your first name' />
            </div>
            <div className='mInputs'>
              <label for=''>Message</label>
              <textarea className='textInputs-tx' type='text' rows={5} placeholder=' Send me a message and Ill reply you as soon as possible...' />
              <p className='e-p'>Please enter a message</p>
            </div>
            <div className='mInputs-cb'>
              <label className='checkbox'>
                <input type='checkbox'/>
                <span class="checkmark"></span>
              </label>
              <p className='m-p'>You agree to providing your data to name who may contact you.</p>
            </div>
            <button className='div-btn'>
              <span className='btn'>Send message </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact