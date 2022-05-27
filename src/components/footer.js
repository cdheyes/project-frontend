import "../style/footer.css";
import logo from "../images/logo.png";
// import home from "../images/home.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

export const Footer = () => {
	return (
		<div className="footer">
			<img src={logo} alt="website logo" />
			<span>Copyright 2022</span>{" "}
			<div className="socialLinks">
				{/* <img src={home} alt="home" /> */}
				<a href="https://twitter.com/home">
					<img src={twitter} alt="twitter logo" />
				</a>
				<a href="https://instagram.com/">
					<img src={instagram} alt="instagram logo" />
				</a>
				<a href="https://facebook.com/">
					<img src={facebook} alt="facebook logo" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
