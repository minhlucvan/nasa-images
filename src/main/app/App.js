import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TiWorld, TiFolderOpen, TiHeartFullOutline } from 'react-icons/ti';

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
	const { config, searchTerm, updateSearchTerm, isHeart, setIsHeart } = useAppContext();
	const [isRemote, setIsRemote] = useState(false);

	const { pathname } = useLocation();

	const toggleHeart = () => {
		setIsHeart(!isHeart);
	};

	useEffect(() => {
		setIsRemote(pathname.includes('explore'));
	}, [pathname]);

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
								<SearchBar term={searchTerm}
									onSearch={updateSearchTerm}
									onChange={updateSearchTerm} />
							</HeaderSection>
							<HeaderSection>
								{!isRemote && <div className={styles.PageLink} onClick={toggleHeart}>
									<TiHeartFullOutline className={isHeart ? styles.light : ''}/>
								</div>}
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
