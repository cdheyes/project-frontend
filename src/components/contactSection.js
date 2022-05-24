import { Bio } from './bio';
// import { Footer } from '../components/footer';
import { ContactForm } from './contactForm';
import { MdEmail, MdLocalPhone } from "react-icons/md";
import React from 'react';
import "../style/contact.css";

export const ContactSection = () => {
    return (
        <div className="contactContainer">
			<div className="container">
            <h1>Contact Us</h1>
            <h2>Get in touch</h2>
                <div className="wrapper">
            <div className="left">
            <Bio icon={<MdLocalPhone/>} text="+449931283"/>
            <Bio icon={<MdEmail/>} text="takeaway@gmail.com"/>
            <Bio text="Manchester, United Kingdom"/>
            </div>
            <div className="right">
                <ContactForm />
			</div>
                </div>
            </div>
        {/* <Footer /> */}
        </div>
    )
}

