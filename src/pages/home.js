import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
import { useState, useEffect } from "react";
import { fetchImages } from "../utils/index";
import React from "react";

const Home = () => {
	const [images, setImages] = useState([]);

    useEffect(() => {
		fetchImages(setImages);
	}, []);

    return (
		<div className="contact">
			<div className="hero">
                <Navbar />
                <Header />
				<div className="imageContainer">
					{images.map((image, i) => {
						return (
							<img
							className="images"
							src={image.download_url}
							alt={`random file from unsplash number ${i}`}
							/>
						);
					})}
				</div>
				{/* <img src ="https://picsum.photos/200/300" alt ="Lorem picsum random picture"/> */}
				<Footer />
			</div>
		</div>
	);
};

export default Home