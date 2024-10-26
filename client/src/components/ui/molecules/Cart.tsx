import { Offcanvas } from 'react-bootstrap';

import { CartProps } from '@/types/cart.types';
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({ show, handleClose }: CartProps) => {
	return (
		<Offcanvas
			placement={'end'}
			show={show}
			onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>
					Cart <CiShoppingCart className='size-6' />
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				Some text as placeholder. In real life you can have the elements you
				have chosen. Like, text, images, lists, etc.
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default Cart;
