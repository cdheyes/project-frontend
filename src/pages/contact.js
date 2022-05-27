import React from "react";
import { ContactSection } from "../components/contactSection";
import { Map } from "../components/map";
import "../style/contact.css";

const Contact = () => {

    return (
        <div className ="contactPageContainer">
             <Map/>
            <ContactSection />
        </div>
    )

}

export default Contact

