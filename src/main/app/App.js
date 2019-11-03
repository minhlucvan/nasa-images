import React from 'react';


import AjaxLoading from '~components/AjaxLoading';
import ErrorBoundary from '~components/ErrorBoundary';
import ToastContainer from '~components/toast/ToastContainer';
import { StackedSection, StackedLayout } from '~components/layout/StackedLayout';
import { Footer } from '~components/widgets/footer';
import { Header, HeaderSection } from '~components/widgets/header';
import { Logo } from '~components/widgets/Logo';
import { SearchBar } from '~components/SearchBar';


import { useAppContext } from '../context/AppContext';

import AppRoutes from './AppRoutes';
import styles from './App.module';


const App = () => {
	const { config, searchTerm, updateSearchTerm } = useAppContext();
	return (
		<main className={styles.App}>
			<ErrorBoundary>
				<StackedLayout>
					<StackedSection>
						<Header>
							<HeaderSection>
								<Logo src={config.BRAND.logo} />
							</HeaderSection>
							<HeaderSection>
								<SearchBar term={searchTerm} onSearch={updateSearchTerm}/>
							</HeaderSection>
							<HeaderSection>action</HeaderSection>
						</Header>
					</StackedSection>
					<StackedSection>
						<AppRoutes />
					</StackedSection>
					<StackedSection>
						<Footer>Powered by Minh Luc Van</Footer>
					</StackedSection>
				</StackedLayout>
				<AjaxLoading />
				<ToastContainer />
			</ErrorBoundary>
		</main>
	);
};

export default App;
