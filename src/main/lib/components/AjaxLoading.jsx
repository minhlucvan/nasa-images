import React from 'react';
import Loader from 'react-loaders';
import BlockUi from 'react-block-ui';
import { connect } from 'react-redux';

const defaultProps = {
	ajaxLoading: true,
};

const AjaxLoading = ({ ajaxLoading }) => (<BlockUi tag="main" blocking={ajaxLoading} loader={<Loader active type="ball-beat" color="#90BC47" />} />);

AjaxLoading.defaultProps = defaultProps;

const mapStateToProps = (state, props) => ({
	ajaxLoading: state.ajaxLoading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AjaxLoading);
