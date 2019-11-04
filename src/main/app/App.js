import React from 'react';
import { Link } from 'react-router-dom';
import { TiWorld, TiFolderOpen } from 'react-icons/ti';

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
	const { config, searchTerm, updateSearchTerm, isRemote } = useAppContext();
	return (
		<main className={styles.App}>
			<ErrorBoundary>
				<StackedLayout>
					<StackedSection>
						<Header>
							<HeaderSection>
								<Logo src={config.brand.logo} />
							</HeaderSection>
							<HeaderSection>
								<SearchBar term={searchTerm} onSearch={updateSearchTerm}/>
							</HeaderSection>
							<HeaderSection>
								{!isRemote && <Link to='/explore' className={styles.PageLink}>
									<TiWorld />
								</Link>}
								{isRemote && <Link to='/collection' className={styles.PageLink}>
									<TiFolderOpen />
								</Link>}
							</HeaderSection>
						</Header>
					</StackedSection>
					<StackedSection grow={true}>
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
