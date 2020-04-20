import React, { memo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Tag, Breadcrumb } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import useTwoColLayout from '@hooks/useTwoColLayout'
import MarkdownTpl from '@components/MarkdownTpl'
import { actions } from '@store/reducers/articleReducer'
import { dateFormat } from '@api/utils'

import './index.scss'

const { Item } = Breadcrumb

const ArticleDetail = props => {
	const { Container, LeftWrapper, RightWrapper } = useTwoColLayout(),
		{ id } = useParams()
	const { fetchArticleContent, articleContent } = props,
		{ title, category, content = '', createAt } = articleContent.toJS()
	useEffect(() => {
		if(!!id) {
			fetchArticleContent(id)
		}
	}, [])
	return (
		<div className="article-detail-wrapper">
			<Container>
				<LeftWrapper>
					<div className="breadcrumb">
						<Breadcrumb>
							<Item>
								<Link to='/'>首页</Link>
							</Item>
							<Item>
								<Link to='/articles'>文章</Link>
							</Item>
							<Item>{title}</Item>
						</Breadcrumb>
					</div>
					<div className="article-title">{title}</div>
					<div className="icons-info">
						<CalendarOutlined />
						发表于
						<span>{dateFormat(createAt, 'yyyy-MM-dd')}</span>
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
					<div className="article-content">
						<MarkdownTpl content={content}/>
					</div>
				</LeftWrapper>
				<RightWrapper />
			</Container>
		</div>
	)
}

export default compose(
	memo,
	connect(
		state => ({
			articleContent: state.getIn(['article', 'articleContent'])
		}),
		actions
	)
)(ArticleDetail)
