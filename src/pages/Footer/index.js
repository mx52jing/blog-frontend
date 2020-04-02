import React, { memo } from 'react'

import './index.scss'

const Footer = () => (
	<div className="footer-wrapper">
		<div>该博客由React+Node+Ant Desgin驱动</div>
		<div>Author~mx52jing</div>
	</div>
)

export default memo(Footer)
