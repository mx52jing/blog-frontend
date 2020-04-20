import React, { memo, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { List } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from '@store/reducers/articleReducer'

import './index.scss'

const { Item } = List

const Article = props => {
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout()
    const { articleData, fetchArticleData } = props,
        { total, page, data } = articleData.toJS()
    useEffect(() => {
        if(!data.length) {
            fetchArticleData()
        }
    }, [])
    /* 分页 */
    const handlePageChange = useCallback((page, pageSize) => {
        fetchArticleData({ page, pageSize })
    }, [])
    return (
        <div className="article-wrapper">
            <Container>
                <LeftWrapper>
                    <List
                        className="article-item"
                        itemLayout="vertical"
                        dataSource={data}
                        pagination={
                            total <= 10 ? false : {
                                total,
                                current: page,
                                pageSize: 10,
                                onChange: handlePageChange
                            }
                        }
                        renderItem={item => (
                            <Item>
                                <div className="list-item-title">
                                    <Link to={`articleDetail/${item._id}`}>{item.title}</Link>
                                </div>
                                <div className="list-item-icon">
                                    <CalendarOutlined/>2020-04-01
                                </div>
                                <div className="list-item-content">
                                    {item.content}
                                </div>
								<div className="go-detail">
									<Link to={`articleDetail/${item._id}`}>查看全文</Link>
                                </div>
                            </Item>
                        )}/>
                </LeftWrapper>
                <RightWrapper></RightWrapper>
            </Container>
        </div>
    )
}

export default compose(
    memo,
    connect(
        state => ({
            articleData: state.getIn(['article', 'articleData'])
        }),
        actions
    )
)(Article)
