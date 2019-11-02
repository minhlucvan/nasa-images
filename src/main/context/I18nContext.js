import React, { useContext } from 'react';
import Provider from 'react-redux';

const Context = React.createContext();

export const useI18nContext = () => useContext(Context);

export const I18nContext = ({ children }) => (
	<Context.Provider value={{}}>
		{children}
	</Context.Provider>
);

export default I18nContext;
