import React, { memo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Breadcrumb } from 'antd'
import useTwoColLayout from '@hooks/useTwoColLayout'
import MarkdownTpl from '@components/MarkdownTpl'
import NavBar from '@components/NavBar'
import IconAndTag from '@components/IconAndTag'
import { actions } from '@store/reducers/articleReducer'

import './index.scss'

const { Item } = Breadcrumb

const ArticleDetail = props => {
	const { Container, LeftWrapper, RightWrapper } = useTwoColLayout(),
		{ id } = useParams()
	const { fetchArticleContent, articleContent } = props,
		{ title, category, content = '', createAt, pv } = articleContent.toJS()
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
					<IconAndTag
						pv={pv}
						category={category}
						createAt={createAt}/>
					<div className="article-content">
						<MarkdownTpl content={content}/>
					</div>
				</LeftWrapper>
				<RightWrapper>
                    <NavBar content={content}/>
				</RightWrapper>
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
