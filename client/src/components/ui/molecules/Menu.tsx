import { Nav, NavDropdown } from 'react-bootstrap';
import { CiShoppingCart, CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { CiDark } from 'react-icons/ci';

import { MenuProps } from '@/types/menu.types';

const Menu = ({ handleShow }: MenuProps) => {
	return (
		<>
			<Nav className='me-auto align-items-lg-center'>
				<li className='nav-item'>
					<NavLink
						className={'nav-link'}
						to='/'>
						Home
					</NavLink>
				</li>
				<NavDropdown
					title='Collections'
					id='collapsible-nav-dropdown'>
					<NavDropdown.Item href='#action/3.1'>
						Action
					</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.2'>
						Another action
					</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.3'>
						Something
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.4'>
						Separated link
					</NavDropdown.Item>
				</NavDropdown>
				<li className='nav-item'>
					<NavLink
						className={'nav-link'}
						to='/about'>
						About
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className={'nav-link'}
						to='/contact'>
						Contact
					</NavLink>
				</li>
			</Nav>
			<Nav className='align-items-lg-center'>
				<li className='nav-item'>
					<Nav.Link
						href='#'
						onClick={(e) => {
							e.preventDefault();
							handleShow();
						}}>
						<CiShoppingCart className='size-6' />
					</Nav.Link>
				</li>
				<NavDropdown
					title={<CiUser className='size-6' />}
					id='collapsible-nav-dropdown'>
					<NavDropdown.Item href='#action/3.1'>
						Log In
					</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.4'>
						Register
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.1'>
						My Orders
					</NavDropdown.Item>
				</NavDropdown>
				<li className='nav-item'>
					<Nav.Link
						href='#'
						onClick={(e) => {
							e.preventDefault();
						}}>
						<CiDark className='size-6' />
					</Nav.Link>
				</li>
			</Nav>
		</>
	);
};

export default Menu;
