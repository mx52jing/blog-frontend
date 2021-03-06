import React, { memo } from 'react'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'
import store from '../store'

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	)
}

export default memo(App)
