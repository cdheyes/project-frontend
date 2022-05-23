import { Bio } from '../components/bio';
import { Header } from "../components/header";
import { Footer } from '../components/footer';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>contact</h1>
			<div className="hero">
				<Header />
				<Bio />
			</div>
				<Footer />
        </div>
    )
}

export default Contact

