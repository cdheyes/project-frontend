import { Upload } from "../components/upload";
import { Footer } from "../components/footer";
// import { Header } from "../components/header";
// import { Navbar } from "../components/navbar";
// import { useState, useEffect } from "react";
// import { fetchImages } from "../utils/index";
// import { Carousel } from "../components/carousel";
import React from "react";
import "../style/restaurant.css";
import images from "../img/foodArray";

const Restaurant = () => {
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	fetchImages(setImages);
	// }, []);

	return (
		<div id="restBody">
			<h1>Here's what our user's have been served</h1>
			{/* <Header /> */}
			{/* <Carousel /> */}

			<div id="uploadContainer">
				<h2>Why not add a picture of your meal:</h2>
				<Upload />
			</div>

			{/*six images of food from choosen restaurant */}
			<div id="foodImageContainer">
				{images.slice(0, 6).map((image, i) => {
					return (
						<img
							className="foodImages"
							src={image}
							alt={"displays images from img/foodArray"}
						/>
					);
				})}
			</div>

			<Footer />
		</div>
	);
};

export default Restaurant;
