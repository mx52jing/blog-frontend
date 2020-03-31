import React, { memo } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import AppComponent from './AppComponent'
import Loading from '@components/Loading'

const AppContainer = props => {
	const {
		isFetching
	} = props
	console.log(props);
	return (
		<>
			<AppComponent/>
			{isFetching && <Loading/>}
		</>
	)
}

export default compose(
	memo,
	connect(
		state => ({
			isFetching: state.getIn(['app', 'isFetching'])
		})
	)
)(AppContainer)
