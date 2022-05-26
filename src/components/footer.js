import "../style/footer.css";
import logo from "../images/logo.png";
import socialLogos from "../images/socialLogos.jpg";
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
				<img src={twitter} alt="twitter logo" />
				<img src={instagram} alt="instagram logo" />
				<img src={facebook} alt="facebook logo" />
			</div>
		</div>
	);
};

export default Footer;
