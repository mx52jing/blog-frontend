import React, { memo } from 'react'
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

import './index.scss'

const AuthorIntroduction = () => {
	return (
		<div className="author-introduction">
			<Avatar className="author-avatar" size={80}/>
			<div className="author-content">
				<div className="introduction-text">
					前端小白一枚，慢慢积累，慢慢进步
				</div>
				<Divider>社交</Divider>
				<Avatar size={28} icon={<GithubOutlined/>}/>
				<Avatar size={28} icon={<QqOutlined/>}/>
				<Avatar size={28} icon={<WechatOutlined/>}/>
			</div>
		</div>
	)
}

export default memo(AuthorIntroduction)
