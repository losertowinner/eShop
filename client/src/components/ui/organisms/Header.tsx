import { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Cart from '../molecules/Cart';
import Menu from '../molecules/Menu';

const Header: FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<header className='sticky-top'>
			<Navbar
				expand='lg'
				bg='light'
				data-bs-theme='light'>
				<Container className='align-items-lg-center'>
					<NavLink
						className={'navbar-brand'}
						to='/'>
						TC-STYLES
					</NavLink>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Menu handleShow={handleShow} />
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Cart
				show={show}
				handleClose={handleClose}
			/>
		</header>
	);
};

export default Header;
