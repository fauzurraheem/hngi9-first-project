import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({firstName:'', lastName:'', message:'', email:''})
  const [fNameE, setfNameE] = useState(false)
  const [lNameE, setlNameE] = useState(false)
  const [emailE, setemailE] = useState(false)
  const [messageE, setmessageE] = useState(false)
 

  const {firstName, lastName, message, email} = formData

 
  const changed = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const submit = (e) => {
    e.preventDefault()
    if(firstName === ''){
      setfNameE(true)
    }else{
      setfNameE(false)
    }
    if(lastName === ''){
      setlNameE(true)
    }else{
      setlNameE(false)
    }
    if(email === ''){
      setemailE(true)
    }else{
      setemailE(false)
    }
    if(message === ''){
      setmessageE(true)
    }else{
      setmessageE(false)
    }
    if(message !== '' && email !== '' && lastName !== ''&& firstName !== ''){
      navigate('/success')
    }
    
  }

  




  return (
    <div className='container'>
      <div className='containerBody'>
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
              <div className='mForm-Desk'>
                <div className='mInputs'>
                  <label htmlFor=''>First name</label>
                  <input className={`textInputs ${fNameE && 'textInputs-e'}`} type='text' placeholder=' Enter your first name' name='firstName' value={firstName} onChange={changed} />
                  <p className={`${fNameE ? 'e-p': 'ft-p'}`}>Please enter your First Name</p>
                </div>
                <div className='mInputs'>
                  <label htmlFor=''>Last name</label>
                  <input className={`textInputs ${lNameE && 'textInputs-e'}`} type='text' placeholder=' Enter your last name' name='lastName'  value={lastName} onChange={changed} />
                  <p className={`${lNameE ? 'e-p': 'ft-p'}`}>Please enter your Last Name</p>
                </div>
              </div>
              <div className='mInputs'>
                <label htmlFor=''>Email</label>
                <input className={`textInputs ${emailE && 'textInputs-e'}`} type='email' placeholder=' Enter your email' name='email' value={email} onChange={changed} />
                <p className={`${emailE ? 'e-p': 'ft-p'}`}>Please enter a valid email</p>
              </div>
              <div className='mInputs'>
                <label htmlFor=''>Message</label>
                <textarea className={`textInputs-tx ${messageE && 'textInputs-tx-e'}`} type='text' rows={5} placeholder=' Send me a message and Ill reply you as soon as possible...' name='message'  value={message} onChange={changed}/>
                <p className={`${messageE ? 'e-p': 'ft-p'}`}>Please enter a message</p>
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
    </div>
  )
}

export default Contact