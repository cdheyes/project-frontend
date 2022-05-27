import React from "react";
import { ContactSection } from "../components/contactSection";
import { Map } from "../components/map";
import "../style/contact.css";
import { Footer } from "../components/footer";

const Contact = () => {

    return (
        <div className = "ContactPage">
        <div className ="contactPageContainer">
             <Map/>
            <ContactSection />
        </div>
        <Footer />
        </div>
    )

    };

export default Contact

