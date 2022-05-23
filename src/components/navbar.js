import { NavLink } from "react-router-dom";
// import "../style/App.css"

export const Navbar = () => {
    return (
        <div>
            <ul>
            <NavLink activeClassName="active_styles" exact to="/"><li>Home</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/food"><li>Food</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/restaurant"><li>Restaurant</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/contact"><li>Contact</li></NavLink>
            <NavLink activeClassName="active_styles" exact to="/login"><li>Login</li></NavLink>
            </ul>
        </div>
        
    );
};