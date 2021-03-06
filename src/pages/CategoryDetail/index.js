import React, { memo, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Timeline, Empty, Pagination } from 'antd';
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from "@store/reducers/categoryReducer"
import { dateFormat } from '@api/utils'

import './index.scss'

const { Item } = Timeline

const CategoryDetail = props => {
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout()
    const { category, fetchCategory } = props,
        categoryData = category.toJS(),
        { data: list = [], total, page } = categoryData,
        params = useParams()
    useEffect(() => {
        fetchCategory({ ...params, page: 1, pageSize: 20 })
    }, [])
    const handlePageChange = useCallback((page, pageSize) => {
        fetchCategory({
            ...params,
            page,
            pageSize
        })
    }, [])
    return (
        <div className="category-detail_wrapper">
            <Container>
                <LeftWrapper>
                    <div className="category-detail-content">
                        <div className="title">
                            <span className="name">{params.name}</span>
                            分类
                        </div>
                        {
                            !!list.length ? (
                                <div className="info">
                                    <Timeline>
                                        {
                                            list.map(item => (
                                                <Item
                                                    className="item-info"
                                                    key={item._id}>
											        <span className="time">
												        {dateFormat(item.createdAt)}
											        </span>
                                                    <span className="title">
												        <Link to={`/articles/${item._id}`}>
													        {item.title}
												        </Link>
											        </span>
                                                </Item>
                                            ))
                                        }
                                    </Timeline>
                                </div>
                            ) : (
                                <Empty
                                    description="该分类下还没有文章哦"
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                            )
                        }
                    </div>
                    {
                        total > 20 ? (
                            <Pagination
                                onChange={handlePageChange}
                                total={total}
                                current={page}
                                pageSize={20}
                            />
                        ) : null
                    }
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
            category: state.getIn(['category', 'categoryList'])
        }),
        actions
    )
)(CategoryDetail)

