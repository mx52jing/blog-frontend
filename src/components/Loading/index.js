import React, { memo } from 'react'

import './index.scss'

const Loading = props => {
	return (
		<div className="loading-wrapper">
			<div className="loading-mask"></div>
			<div className="loading-content"></div>
		</div>
	)
}

export default memo(Loading)
