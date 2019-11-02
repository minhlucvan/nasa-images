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
			return <div><pre>{this.state.errorInfo}</pre></div>;
		}

		/* No issues so just render the children */
		return this.props.children;
	};
}

ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;
