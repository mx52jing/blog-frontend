import React, { memo, useEffect } from 'react'
import { Tag, Empty } from 'antd'
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from "@store/reducers/categoryReducer"
import { compose } from 'redux'
import { connect } from 'react-redux'

import './index.scss'

const Category = props => {
    const { category, fetchCategory } = props
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout(),
        list = category.toJS()
    useEffect(() => {
        if(!list.length) {
            fetchCategory()
        }
    }, [])
    return (
        <div className="category-wrapper">
            <Container>
                <LeftWrapper>
                    {
						!!list.length ?
                            list.map(item => (
                                <Tag
                                    color="cyan"
                                    size="large"
                                    key={item._id}>
                                    {item.name}
                                </Tag>
                            )) :
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
