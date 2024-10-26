import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

import '@/assets/css/index.css';
import { publicRouter } from '@/routes/routes';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={publicRouter} />
		</Suspense>
	</StrictMode>,
);
