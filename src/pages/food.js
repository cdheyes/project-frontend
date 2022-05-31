import React from "react";
import { Footer } from "../components/footer";
import { SearchCuisine } from "../components/cuisines";


const Food = () => {

	return (
			<div>
				<h1 className="pageHeader"> Restaurant Array </h1>
				<h2 className="pageIntro"> Please search for restaurants by Regional Cuisine </h2>
				<SearchCuisine />
				<Footer/>
			</div>
	)
};

export default Food;
