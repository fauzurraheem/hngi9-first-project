import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({firstName:'', lastName:'', message:'', email:''})
  const [errorM, setErrorM] = useState({
    fNameE:false, lNameE:false, emailE:false, messageE:false,
  })

  const {firstName, lastName, message, email} = formData

  const {fNameE,lNameE,emailE,messageE} = errorM

  const changed = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const submit = (e) => {
    e.preventDefault()
    if(firstName === ''){
      setErrorM({
        ...errorM,
        fNameE:true
      })
    }
    if(lastName === ''){
      setErrorM({
        ...errorM,
        lNameE:true
      })
    }
    console.log(errorM)
  }

  console.log(firstName)




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
          <form className='mForm' onSubmit={submit}>
            <div className='mInputs'>
              <label htmlFor=''>First name</label>
              <input className='textInputs' type='text' placeholder=' Enter your first name' name='firstName' value={firstName} onChange={changed} />
              <p className='e-p'>Please enter your First Name</p>
            </div>
            <p></p>
            <div className='mInputs'>
              <label htmlFor=''>Last name</label>
              <input className='textInputs' type='text' placeholder=' Enter your last name' name='lastName'  value={lastName} onChange={changed} />
              <p className='e-p'>Please enter your Last Name</p>
            </div>
            <div className='mInputs'>
              <label htmlFor=''>Email</label>
              <input className='textInputs' type='email' placeholder=' Enter your first name' name='email' value={email} onChange={changed} />
              <p className='e-p'>Please enter a valid email</p>
            </div>
            <div className='mInputs'>
              <label htmlFor=''>Message</label>
              <textarea className='textInputs-tx' type='text' rows={5} placeholder=' Send me a message and Ill reply you as soon as possible...' name='message'  value={message} onChange={changed}/>
              <p className='e-p'>Please enter a message</p>
            </div>
            <div className='mInputs-cb'>
              <label className='checkbox' >
                <input type='checkbox'/>
                <span className="checkmark" onClick={() => setChecked(!checked)}></span>
              </label>
              <p className='m-p'>You agree to providing your data to name who may contact you.</p>
            </div>
            <button  disabled={!checked}  className='div-btn'>
              <span className='btn'>Send message </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact