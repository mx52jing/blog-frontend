import React, { memo, useEffect } from 'react'
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from "@store/reducers/categoryReducer"
import { compose } from 'redux'
import { connect } from 'react-redux'

const Category = props => {
    const { category, fetchCategory } = props
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout()
    console.log(category.toJS());
    useEffect(() => {
        if(!category.size) {
            fetchCategory()
        }
    }, [])
    return (
        <div className="category-wrapper">
            <Container>
                <LeftWrapper></LeftWrapper>
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
