//Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 1500px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`;
export const Description = styled(motion.div)`
	flex: 1;
	z-index: 2;
	padding-right: 1rem;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1600px) {
		padding-right: 0;
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;
export const Image = styled(motion.div)`
	flex: 1;
	z-index: 2;
	overflow: hidden;
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
	@media (max-width: 1600px) {
		img {
			width: 80%;
		}
	}
`;

export const Header = styled(motion.h2)`
	font-size: 3rem;
`;
