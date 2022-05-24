import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import images from "../img/carouselArray"
import "../style/home.css";

export const Carousel = () => {
    return (
        <div className="carouselContainer">
        
        <motion.div className="carousel">
        <motion.div className="innerCarousel">
                {images.map(image =>{
                    return(
                      <motion.div className="item">
                          {/* <h5>test</h5> */}
                          <img src={image} alt=""/>
                      </motion.div>
                    );
                })}
            </motion.div>
            </motion.div>


        </div>
        
    );
}