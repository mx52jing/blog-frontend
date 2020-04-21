import React, { memo, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { actions } from "@store/reducers/articleReducer";

import './index.scss'

const { Search } = Input

const SearchWrapper = props => {
	const history = useHistory(),
		{ fetchArticleData } = props
	const [keyword, setKeyword] = useState('')
	const handleSearch = useCallback(value => {
		history.replace('/articles')
		fetchArticleData({ keyword: value })
		setKeyword('')
	}, [])
	return (
		<div className="search-wrapper">
			<Search
				onChange={e => setKeyword(e.target.value)}
				value={keyword}
				placeholder="搜索文章 按下回车/点击搜索按钮搜索"
				onSearch={handleSearch}
			/>
		</div>
	)
}

export default compose(
	memo,
	connect(
		null,
		actions
	)
)(SearchWrapper)
