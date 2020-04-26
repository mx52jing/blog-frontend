import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Home = props => {
	return (
		<div className="home-wrapper">
			<div className="home-content">
				<Link to='/articles'>文章</Link>
				<Link to='/categories'>分类</Link>
				<Link to='/archives'>归档</Link>
			</div>
		</div>
	)
}

export default memo(Home)
