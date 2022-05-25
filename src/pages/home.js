import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
import { useState, useEffect } from "react";
import { fetchImages } from "../utils/index";
import {Carousel} from "../components/carousel";
// import {Logo} from "";
import React from "react";

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages(setImages);
    }, []);

	return (
        <div className="heroHome">
                <Header />
            <div className="homeContentContainer">

            {/* <img className="" src ={Logo} alt="logo"/>  */}

                    <div className="hometitle">
                        <p>OUR APP NAME</p>
                    </div>

                    <div className="missionStatement">

                        <p className="missionTitle">
                        Mission Statement:</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                        Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                        Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                        Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                        </p>

						</div>

						<div className="quickSearch">

							<p>Quick Search:</p>
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