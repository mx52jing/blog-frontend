import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Header = props => {
	return (
		<div className="header-wrapper">
			我是header
		</div>
	)
}

export default memo(Header)
