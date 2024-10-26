import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../ui/organisms/Header';
import Footer from '../ui/organisms/Footer';

const RootLayout: FC = () => {
	return (
		<>
			<Header />
			<main className='container min-vh-100 py-4'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
