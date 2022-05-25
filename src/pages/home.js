import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchImages } from "../utils/index";
import {Carousel} from "../components/carousel";
import logo from "../img/takearray1.png";
import React from "react";

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages(setImages);
    }, []);

	return (
        <div className="heroHome">
            <div className="homeContentContainer">

            

                    <div className="hometitle">
                        <img className="" src ={logo} alt="logo"/> 
                    </div>

                    <div className="missionStatement">
                        <p>
						Ever sat down to your takeaway meal to find yourself thinking “hang on a minute, that looks nothing like the picture advertised”! Well here at [TAKE-ARRAY] we believe that customers should get a trusted insight in to their food before they decide where to order from. Here, users can upload images of their meals, alongside reviews. So check what’s been cooking or sign up to submit your own photo reviews!
                        </p>

						</div>

						<div className="quickSearch">
							<p>In a hurry? Scroll cuisines too see user reviews</p>

						</div>

						</div>

						<Carousel/>

						<div className="slogan">
							Our Apps Slogan Lorem ipsum dolor sit amet, consectetur adip.
						</div>

						<div className="imageContainer">
							{/* {images.map((image, i) => {
								return (
									<img
									className="images"
									src={image.download_url}
									alt={random file from unsplash number ${i}}
									/>
								);
							})} */}

					{/* <img src ="https://picsum.photos/200/300" alt ="Lorem picsum random picture"/> */}
					</div>

				<Footer />

			</div>
		);
	};

export default Home