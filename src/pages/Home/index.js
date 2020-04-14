import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Home = props => {
	const snowArr = [...Array(200).keys()]
	return (
		<div className="home-wrapper">
			<div className="home-content">
				<Link to='/articles'>文章</Link>
			</div>
			{
				snowArr.map(item => (
					<div className="snow" key={item}></div>
				))
			}
		</div>
	)
}

export default memo(Home)
