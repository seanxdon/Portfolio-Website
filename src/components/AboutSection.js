import React from 'react';
import { About, Description, Image, Header } from '../styles';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
//Images
import seancartoon from '../img/sean-cartoon.png';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
	return (
		<About>
			<Description>
				<div className='title'>
					<Hide>
						<Header variants={titleAnim}>
							Hi! I'm <span>Sean McDaniel</span>
						</Header>
					</Hide>
					<Hide>
						<Header variants={titleAnim}>
							Software Engineer Based in Orange County, CA
						</Header>
					</Hide>
				</div>
				{/* <Para variants={fade}>Hi! I'm Sean McDaniel,</Para> */}
				<Para variants={fade}>
					2 years of experience designing websites professionally as a front-end
					engineer. I specialize in building products with the quality of today
					with the technology of tomorrow.
				</Para>
				<motion.button variants={fade}>View Projects</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={seancartoon} alt='sean-cartoon' />
			</Image>
			<Wave />
		</About>
	);
};

const Hide = styled.div`
	overflow: hidden;
`;

const Para = styled.p`
	padding: 2rem 0rem;
	color: #fff;
`;

export default AboutSection;
