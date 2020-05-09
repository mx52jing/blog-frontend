import React from 'react'
import { Anchor } from 'antd'

const { Link } = Anchor

class Tocify {
	constructor(props) {
		this.anchors = []
		this.index = 0
	}

	add(text, level) {
		const anchor = `anchor${++this.index}`,
			item = { anchor, text, level }
		if (!this.anchors.length) {
			this.anchors.push(item)
		} else {
			let lastItem = [...this.anchors].pop()
			if (item.level > lastItem.level) {
				for (let i = 0; i <= 6; i++) {
					const { children } = lastItem
					if (!children) {
						lastItem.children = [item]
						break;
					}
					lastItem = [...children].pop()
					if (item.level <= lastItem.level) {
						children.push(item)
						break;
					}
				}
			} else {
				this.anchors.push(item)
			}
		}
		return anchor
	}

	reset() {
		this.anchors = []
		this.index = 0
	}

	renderAnchors(items) {
		return (
			items.map(item => {
				return (
					<Link
						key={item.anchor}
						title={item.text}
						href={`#${item.anchor}`}>
						{
							!!item.children &&
							this.renderAnchors(item.children)
						}
					</Link>
				)
			})
		)
	}

	render() {
		const { anchors } = this
		return (
			<Anchor
				targetOffset={60}
				affix={false}
				showInkInFixed>
				{this.renderAnchors(anchors)}
			</Anchor>
		)
	}
}

export default Tocify
