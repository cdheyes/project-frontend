import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import image from "../img/chineseArray"
import "../style/home.css";
export const Chinese = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.of
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className="carouselContainer">
          <h2>Chinese</h2>
        
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x"
        dragConstraints= {{ right: 0, left: -width}}
        className ="innerCarousel">
            <div className="caroselRow">
                {image.map(image =>{
                    return(
                      <motion.div className="array" key={image}>
                          {/* <h5>Cuisine</h5> */}
                          <button className="btnImage"><a href=""><img className="arrayImg" src={image} alt="Cuisine"/></a></button>
                      </motion.div>
                      
                    );
                })}
                </div>
            </motion.div>
            </motion.div>
    
    
        </div>
        
    );
    }
