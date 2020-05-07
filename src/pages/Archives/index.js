import React, { memo, useEffect } from 'react'
import { Empty } from 'antd'
import useTwoColLayout from '@hooks/useTwoColLayout'
import { actions } from "@store/reducers/archivesReducer"
import { compose } from 'redux'
import { connect } from 'react-redux'
import ArchivesItem from './ArchivesItem'

import './index.scss'

const Archives = props => {
	const { Container, LeftWrapper, RightWrapper } = useTwoColLayout(),
		{ archives, fetchArchives } = props,
		{ data } = archives.toJS()
	useEffect(() => {
		if(!data.length) {
			fetchArchives()
		}
	}, [])
	return (
		<div className="archives-wrapper">
			<Container>
				<LeftWrapper>
					{
						!!data.length ?
							data.map(item => (
								<ArchivesItem
									key={item.id}
									{...item}/>
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
			archives: state.getIn(['archives', 'archivesData'])
		}),
		actions
	)
)(Archives)
