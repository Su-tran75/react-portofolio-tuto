import React from "react";
import "./footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
	return (
		<footer data-aos="fade-up" data-aos-offset="200" data-aos-delay="200">
			<a href='#' className='footer__logo'>
				Super Saiyan
			</a>

			<ul className='permalinks'>
				<li><a href='#'>Home</a></li>
				<li><a href='#about'>About</a></li>
				<li><a href='#experience'>Experience</a></li>
				<li><a href='#services'>Services</a></li>
				<li><a href='#portfolio'>Portofolio</a></li>
				<li><a href='#testimonials'>Testimonials</a></li>
				<li><a href='#contact'>Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://facebook.com"><FaFacebookF /></a>
				<a href="https://instagram.com"><FiInstagram /></a>
				<a href="https://twitter.com"><IoLogoTwitter /></a>
			</div>

			<div className="footer__copyright">
				<small>&copy;2022 Super Saiyan. All rights reserved.</small>
			</div>

		</footer>
	);
};

export default Footer;
