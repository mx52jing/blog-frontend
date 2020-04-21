import React, { memo, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import useTwoColLayout from '@hooks/useTwoColLayout'
import IconAndTag from '@components/IconAndTag'
import { actions } from '@store/reducers/articleReducer'
import { addPv } from '@api/request'

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
    /* 增加浏览量 */
    const handleAddPv = useCallback(id => {
		addPv(id)
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
                                    <Link
                                        onClick={() => handleAddPv(item._id)}
                                        to={`articleDetail/${item._id}`}>
                                        {item.title}
                                    </Link>
                                </div>
								<IconAndTag {...item}/>
								<div className="go-detail">
									<Link
										onClick={() => handleAddPv(item._id)}
                                        to={`articleDetail/${item._id}`}>
                                        查看全文
                                    </Link>
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
