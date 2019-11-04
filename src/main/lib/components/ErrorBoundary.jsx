import React, { Component } from 'react';

const defaultProps = {
	children: null,
};

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
	}

	getInitialState = () => ({
		error: null,
		errorInfo: null,
	});

	componentDidCatch = (error, errorInfo) => this.setState({ error, errorInfo });

	render = () => {
		if (this.state.errorInfo) {
			console.error(this.state.error);
			return <h1>Opps!</h1>;
		}

		/* No issues so just render the children */
		return this.props.children;
	};
}

ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;
