import React from 'react';
import Loader from 'react-loaders';
import { connect } from 'react-redux';

const defaultProps = {
	ajaxLoading: false,
};

const AjaxLoading = ({ ajaxLoading }) => (ajaxLoading ? (<div>loading</div>) : null);

AjaxLoading.defaultProps = defaultProps;

const mapStateToProps = (state, props) => ({
	ajaxLoading: state.ajaxLoading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AjaxLoading);
