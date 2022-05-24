import React, { useState } from 'react'
import "../style/contact.css"

export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  return (
    <div>
        <form className="form-styling">
            <div className="form-group">
                <label htmlFor="name">Your Name
                <input className="input" type="text" id="name"
                name="name" value={name} 
                onChange={e => setName(e.target.value)}
                />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="email">Your Email
                <input className="input" type="text" id="email"
                email="email" value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="message">Your Message
                <textarea type="text" id="message"
                message="message" value={message} 
                onChange={e => setMessage(e.target.value)}
                />
                </label>
            </div>
            <button className="button" type="submit">Send</button>
        </form>
    </div>
  )
}


