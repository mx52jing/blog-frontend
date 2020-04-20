import React, { memo } from 'react'
import { Affix, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import './index.scss'

const Header = () => {
	return (
		<Affix offsetTop={0}>
			<div className="header-wrapper">
				<Row align="middle">
					<Col className='header-title' span={4} offset={3}>
						哈萨Q's Blog
					</Col>
					<Col span={2} offset={9}>
						<Link to='/'>首页</Link>
					</Col>
					<Col span={2}>
						<Link to='/articles'>文章</Link>
					</Col>
					<Col span={2}>
						<Link to='/categories'>分类</Link>
					</Col>
				</Row>
			</div>
		</Affix>
	)
}

export default memo(Header)
