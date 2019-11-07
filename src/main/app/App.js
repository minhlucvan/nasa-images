import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { folderOpenO } from 'react-icons-kit/fa/folderOpenO';
import { Icon } from 'react-icons-kit';
import { globe } from 'react-icons-kit/fa/globe';
import { heart } from 'react-icons-kit/fa/heart';

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
									placeholder="Search for images"
									onSearch={updateSearchTerm}
									onChange={updateSearchTerm} />
							</HeaderSection>
							<HeaderSection>
								<div className={styles.Actions}>
									{!isRemote && <div className={styles.PageLink} onClick={toggleHeart}>
										<Icon icon={heart} className={`${isHeart ? styles.light : ''}`}/>
									</div>}
									{!isRemote && <Link to='/explore' className={styles.PageLink}>
										<Icon icon={globe} className={`${isRemote ? styles.light : ''}`} />
									</Link>}
									{isRemote && <Link to='/collection' className={styles.PageLink}>
										<Icon icon={folderOpenO} className={`${isRemote ? styles.light : ''}`}/>
									</Link>}
								</div>
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
