import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { dateFormat } from '@api/utils'
import { EyeOutlined } from '@ant-design/icons'

const ArchivesItem = ({ _id, children }) => {
	return (
		<div className="archives-item">
			<div className="title">{_id}</div>
			<ul>
				{
					children.map(item => (
						<li
							className="item-info"
							key={item.id}>
							<time>{dateFormat(item.createdAt, 'MM-dd')}</time>
							<Link
								to={`/articles/${item.id}`}
								className="link">
								{item.title}
							</Link>
							<spam className="pv">
								<EyeOutlined/>
								{item.pv}
							</spam>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default memo(ArchivesItem)
