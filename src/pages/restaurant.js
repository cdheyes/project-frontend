import { Upload } from "../components/upload";
import { Footer } from "../components/footer";
import { Turkish } from "../components/turkish"
import { Indian } from "../components/indian"
import { Italian } from "../components/italian"
import { Chinese } from "../components/chinese"
import { American } from "../components/american"
import { Japanese } from "../components/sushi"
// import { Header } from "../components/header";
// import { Navbar } from "../components/navbar";
// import { useState, useEffect } from "react";
// import { fetchImages } from "../utils/index";
import React from "react";
import "../style/restaurant.css";

const Restaurant = () => {
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	fetchImages(setImages);
	// }, []);

	return (
		<div id="restBody">
			<h1>Our user submissions for this establishment</h1>
			{/* <Header /> */}


			<div id="uploadContainer">
				<span>Add a picture of your meal: </span>
				<Upload />
				<div id="foodImageContainer">
				<Turkish />
				<Indian />
				<Italian />
				<Chinese />
				<American />
				<Japanese />
				<Footer />
				</div>
			</div>

		</div>
	);
};

export default Restaurant;
