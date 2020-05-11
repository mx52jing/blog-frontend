import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Tag, Empty } from 'antd'
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from "@store/reducers/categoryReducer"

import './index.scss'

const colors = ['magenta', 'geekblue', 'purple', 'cyan', 'volcano', 'blue', 'green', 'orange']
const Category = props => {
    const { category, fetchCategory } = props
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout(),
        list = category.toJS()
    useEffect(() => {
        fetchCategory()
    }, [])
    return (
        <div className="category-wrapper">
            <Container>
                <LeftWrapper>
                    <div className="category-title">
                        <span className='name'>分类</span>
                        <p className='disc'>目前共计{list.length}个分类</p>
                    </div>
                    {
                        !!list.length ?
                            list.map(item => {
                                const index = Math.floor(Math.random() * 8),
                                    color = colors[index],
                                    { name, articleCount } = item
                                return (
                                    <Tag
                                        color={color}
                                        size="large"
                                        key={item._id}>
                                        <Link
                                            to={`/categories/${name}`}>
                                            {name}({articleCount})
                                        </Link>
                                    </Tag>
                                )
                            }) :
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
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
)(Category)
