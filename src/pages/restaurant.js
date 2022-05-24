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
		<div className="restBody">
			<h1>User pictures of this restaurants food</h1>
			{/* <Header /> */}
			<Upload />
			{/* <Carousel /> */}

			{/*six images of food from choosen restaurant */}
			<div className="foodImageContainer">
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
