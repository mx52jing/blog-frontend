import React, { memo, useEffect } from 'react'
import useTwoColLayout from '@hooks/useTwoColLayout'

const Category = props => {
    const { Container, LeftWrapper, RightWrapper } = useTwoColLayout()
    console.log('category render');
    useEffect(() => {}, [])
    return (
        <div className="category-wrapper">
            <Container>
                <LeftWrapper></LeftWrapper>
                <RightWrapper></RightWrapper>
            </Container>
        </div>
    )
}


export default memo(Category)
