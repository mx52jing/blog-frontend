import React, { memo } from 'react'
import { Tag } from 'antd'
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
import { dateFormat } from '@api/utils'

import './index.scss'

export default memo(({ createdAt, category, pv }) => (
	<>
		<div className="icons-info">
			<span className="icon-item">
				<CalendarOutlined/>
				<span>{dateFormat(createdAt, 'yyyy-MM-dd')}</span>
			</span>
			<span className="icon-item">
				<EyeOutlined />
				{pv}
			</span>
		</div>
		<div className="category">
			{
				category.map(item => (
					<Tag
						color='cyan'
						key={item}>
						{item}
					</Tag>
				))
			}
		</div>
	</>
))
