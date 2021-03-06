import React, { useState } from 'react'
import "../style/contact.css"
// Lets See
export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  return (
    <div>
        <form className="form-styling">
            <div className="form-group">
                <label htmlFor="name">
                    <p className="formHeader">Your Name</p>
                <input className="input" type="text" id="name"
                name="name" value={name} 
                onChange={e => setName(e.target.value)}
                />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="email">
                <p className="formHeader">Your Email</p>
                <input className="input" type="text" id="email"
                email="email" value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="message">
                <p className="formHeader">Message</p>
                <textarea type="text" id="message"
                message="message" rows="10" value={message} 
                onChange={e => setMessage(e.target.value)}
                />
                </label>
            </div>
            
            <button className="buttonSend" type="submit">Send</button>
        </form>
    </div>
  )
}


