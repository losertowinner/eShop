import { FC } from 'react';
import Greeting from '@/components/ui/Greeting';

const App: FC = () => {
	return (
		<>
			<h1>Home</h1>
			<Greeting message='ZIN' />
		</>
	);
};

export default App;
