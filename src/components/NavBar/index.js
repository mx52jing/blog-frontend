import React, { memo } from 'react'
import { Affix } from 'antd'
import Tocify from './Tocify'
import marked from "marked"

import './index.scss'

const Navbar = ({ content }) => {
	const renderer = new marked.Renderer(),
		tocify = new Tocify()
	renderer.heading = (text, level, raw) => {
		const anchor = tocify.add(text, level)
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`;
	}
	marked.setOptions({ renderer })
	marked(content)
	return (
		<Affix offsetTop={60}>
			<div className="nav-bar__wrapper">
				<div className="title">文章目录</div>
				{tocify.render()}
			</div>
		</Affix>
	)
}

export default memo(Navbar)

