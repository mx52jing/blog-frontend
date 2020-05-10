import React, { memo } from 'react'
import { Affix, Row, Col } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import SearchWrapper from '../SearchWrapper'

import './index.scss'

const headerAry = [
	{
		title: '首页',
		path: '/',
		exact: true
	},
	{
		title: '文章',
		path: '/articles'
	},
	{
		title: '分类',
		path: '/categories'
	},
	{
		title: '归档',
		path: '/archives'
	}
]
const Header = () => {
	return (
		<Affix offsetTop={0}>
			<div className="header-wrapper">
				<Row align="middle">
					<Col className='header-title' span={4} offset={3}>
						哈萨Q's Blog
					</Col>
					{
						headerAry.map(item => (
							<Col span={2}>
								<NavLink
									exact={item.exact}
									to={item.path}
									activeClassName='nav-selected'>
									{item.title}
								</NavLink>
							</Col>
						))
					}
					<Col offset={2}>
						<SearchWrapper/>
					</Col>
				</Row>
			</div>
		</Affix>
	)
}

export default memo(Header)
