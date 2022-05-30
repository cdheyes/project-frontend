import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import image from "../img/carouselArray"
import {cuisineString} from "../img/carouselArray"
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
            <div className="caroselRow">
                {image.map(image =>{
                    return(
                      <motion.div className="item" key={image}>
                          {/* <h5>Cuisine</h5> */}
                          <button className="btnImage"><a href=""><img className="itemImg" src={image} alt="Cuisine"/></a></button>
                      </motion.div>
                      
                    );
                })}
                </div>
                <div className="caroselRow">
                 {cuisineString.map(({cuisine})=>{
                    return(
                      <motion.div className="itemTitle">
                         <p className="itemTitleReturn" key={cuisine}>{cuisine}</p>
                      </motion.div>
                    );
                })}
                </div>
            </motion.div>
            </motion.div>
    
    
        </div>
        
    );
    }

//     return (
//         <div className="carouselContainer">
        
//         <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
//         <motion.div drag="x"
//         dragConstraints= {{ right: 0, left: -width}}
//         className ="innerCarousel">
//                 {carouselArray.map((cuisine, image) =>{
//                     return(
//                       <motion.div className="item" key={(cuisine, image)}>
//                           {cuisine.image}
//                           <a href="/"><img className="itemImg" src={cuisine.image} alt="Cuisine"/></a>
//                       </motion.div>
//                     );
//                 })}
//             </motion.div>
//             </motion.div>


//         </div>
        
//     );
// }

