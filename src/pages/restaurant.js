import { Upload } from "../components/upload";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchImages } from "../utils/index";
import { Carousel } from "../components/carousel";
import React from "react";
import "../style/home.css";

const Restaurant = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetchImages(setImages);
	}, []);

	return (
		<div>
			<h1>Restaurant Food</h1>
			<Header />
			<Upload />
			{/*images of food from choosen restaurant */}
			<Carousel />
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

			<Footer />
		</div>
	);
};

export default Restaurant;
