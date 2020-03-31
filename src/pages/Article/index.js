import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Article = props => {
	return (
		<div className="article-wrapper">
			<Link to='/'>首页</Link>
			Article wrapper
		</div>
	)
}

export default memo(Article)

