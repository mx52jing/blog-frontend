import React from 'react'
import { Row, Col } from 'antd'
import AuthorIntroduction from '@components/AuthorIntroduction'

const useTwoColLayout = props => {
	const LeftWrapper = ({ children }) => (
		<Col
			className='left-wrapper__common'
			xs={24}
			sm={24}
			md={15}
			lg={17}
			xl={13}>
			{children}
		</Col>
	)
	const RightWrapper = ({ children }) => (
		<Col
			className='right-wrapper__common'
			xs={0}
			sm={0}
			md={8}
			lg={6}
			xl={5}>
			<AuthorIntroduction />
			{children}
		</Col>
	)
	const Container = ({ children }) => (
		<Row
			className="container_wrapper__common"
			type="flex"
			justify="center">
			{children}
		</Row>
	)
	return {
		Container,
		LeftWrapper,
		RightWrapper
	}
}

export default useTwoColLayout
