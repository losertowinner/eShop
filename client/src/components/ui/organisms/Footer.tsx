import { FC } from 'react';
import { Container } from 'react-bootstrap';

const Footer: FC = () => {
	return (
		<footer className='bg-light p-3 fixed-bottom'>
			<Container>
				<p className='text-center mb-0'>
					&copy; {new Date().getFullYear()} by{' '}
					<a
						href={'https://github.com/losertowinner'}
						target='_blank'>
						ZIN
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
