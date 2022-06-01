import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {useState} from "react";
import {fetchCuisine} from "../utils/index";
import "../style/food.css";


export const SearchCuisine = () => {
   const [searchTerm, setSearchTerm] = useState();
   const [results, setResults] = useState([]);

const submitHandler = async (e) => {
      e.preventDefault();
      await fetchCuisine(searchTerm, setResults);
   }

   return(
      <div>
         <form onSubmit={submitHandler}>
            <input className="inputCuisine" onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="subBtn"type="submit">Submit</button>
         </form>
         {results.map((item, index) => {
             return(
                <div className="searchResultContainer">
                <div className="searchResult">
                     <h1 className="searchTitle">{item.name}</h1>
                     <NavLink activeClassName="active_styles" exact to="/food"><li><IconContext.Provider value={{ className: "react-icons" }}></IconContext.Provider> View Users Photo Reviews</li></NavLink>
                </div>
                </div>
             )
          })}
      </div>
   )
};

export default SearchCuisine;