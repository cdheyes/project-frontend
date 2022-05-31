import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {useState} from "react";
import {fetchCuisine} from "../utils/index";


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
            <input onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Submit</button>
         </form>
         {results.map((item, index) => {
             return(
                <div>
                     <h1>{item.name}</h1>
                     <NavLink activeClassName="active_styles" exact to="/restaurant"><li><IconContext.Provider value={{ className: "react-icons" }}></IconContext.Provider> View food photos</li></NavLink>
                </div>
             )
          })}
      </div>
   )
};

export default SearchCuisine;