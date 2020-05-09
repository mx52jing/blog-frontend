import React, { memo } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import Tocify from '../NavBar/Tocify'

import 'highlight.js/styles/monokai-sublime.css'
import './index.scss'

const MarkdownTpl = ({ content }) => {
	const renderer = new marked.Renderer(),
		tocify = new Tocify()
	renderer.heading = (text, level, raw) => {
		const anchor = tocify.add(text, level)
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`;
	}
	marked.setOptions({
		renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: true,
		smartLists: true,
		highlight: code => hljs.highlightAuto(code).value
	})
	const html = marked(content)
	return (
		<div
			dangerouslySetInnerHTML={{ __html: html }}
			className="markdown-content">
		</div>
	)
}

export default memo(MarkdownTpl)
