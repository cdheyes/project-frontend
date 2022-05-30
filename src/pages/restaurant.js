import { Upload } from "../components/upload";
import { Footer } from "../components/footer";
// import { Header } from "../components/header";
// import { Navbar } from "../components/navbar";
// import { useState, useEffect } from "react";
// import { fetchImages } from "../utils/index";
// import { Carousel } from "../components/carousel";
import React from "react";
import "../style/restaurant.css";
import images from "../img/curryArray";

const Restaurant = () => {
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	fetchImages(setImages);
	// }, []);

	return (
		<div id="restBody">
			<h1>Our user submissions for this establishment</h1>
			{/* <Header /> */}
			{/* <Carousel /> */}

			<div id="uploadContainer">
				<span>Add a picture of your meal: </span>
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
