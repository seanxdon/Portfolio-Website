import React from 'react';
import { About, Description, Image, Header } from '../styles';
import styled from 'styled-components';
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
						<Header variants={titleAnim}>Software Engineer</Header>
					</Hide>
					<Hide>
						<Header variants={titleAnim}>
							Based in <span>Orange County</span>,
						</Header>
					</Hide>
					<Hide>
						<Header variants={titleAnim}>California.</Header>
					</Hide>
				</div>
				<Para variants={fade}>Hi! I'm Sean McDaniel,</Para>
				<Para variants={fade}>
					An ambitious developer with over 2 years of experience designing
					websites professionally as a front-end engineer. I specialize in
					building product with the quality of today with the technology of
					tomorrow.
				</Para>
				<motion.button variants={fade}>Contact Us</motion.button>
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
	padding: 0rem;
	padding-top: 2rem;
	p {
		padding-bottom: 2rem;
	}
`;

export default AboutSection;
