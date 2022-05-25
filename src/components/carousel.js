import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import images from "../img/carouselArray"
import "../style/home.css";

export const Carousel = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.of
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className="carouselContainer">
        
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x"
        dragConstraints= {{ right: 0, left: -width}}
        className ="innerCarousel">
                {images.map(image =>{
                    return(
                      <motion.div className="item" key={image}>
                          <h5>Cuisine</h5>
                          <a href="/"><img className="itemImg" src={image} alt="Cuisine"/></a>
                      </motion.div>
                    );
                })}
            </motion.div>
            </motion.div>


        </div>
        
    );
}

