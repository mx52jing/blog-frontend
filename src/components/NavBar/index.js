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
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    }
    marked.setOptions({ renderer })
    marked(content)
    return (
        <div className="nav-bar__wrapper">
            <Affix offsetTop={80}>
                {tocify.render()}
            </Affix>
        </div>
    )
}

export default memo(Navbar)

