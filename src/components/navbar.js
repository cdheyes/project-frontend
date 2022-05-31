import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";


import "../style/nav.css";
import { CgProfile } from 'react-icons/cg';
// import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineFoodBank, MdOutlineFastfood, MdOutlineContactPhone } from 'react-icons/md';
import miniLogo from "../images/miniLogo.png"



export const Navbar = () => {
    return (
        <div className = "navContainer">
            <ul>
            <NavLink activeClassName="active_styles1" exact to="/"><li className="leftNavPos"><img className="miniLogo" src ={miniLogo} alt="mini-logo"/> </li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/food"><li><IconContext.Provider value={{ className: "react-icons" }}> <MdOutlineFoodBank/></IconContext.Provider>Restaurant</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/restaurant"><li><IconContext.Provider value={{ className: "react-icons" }}> <MdOutlineFastfood/></IconContext.Provider>Food</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/contact"><li><IconContext.Provider value={{ className: "react-icons" }}> <MdOutlineContactPhone/></IconContext.Provider>Contact</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/login"><li><IconContext.Provider value={{ className: "react-icons" }}> <CgProfile/></IconContext.Provider>Sign-up / Login</li></NavLink>
            </ul>
        </div>
        
    );
};