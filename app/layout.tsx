import { ReactElement } from 'react';
import Header from './components/Header/Header';
import './globals.scss';

interface LayoutProps {
	children: ReactElement
}

export default function RootLayout(props: LayoutProps){
	const { children } = props;
	
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body>
				<Header />

				<main>
					{ children }
				</main>
			</body>
		</html>
	)
}
