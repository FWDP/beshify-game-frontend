import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => {
	useEffect(() => {
		if (typeof document !== 'undefined') {
			document.querySelector('html')?.setAttribute('data-theme', 'light');
		}
	}, []);

	return (
		<>
			<Header />
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default Layout;
