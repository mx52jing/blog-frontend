import React, { memo } from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import useTwoColLayout from '@hooks/useTwoColLayout'
import MarkdownTpl from '@components/MarkdownTpl'

import './index.scss'
const content = '# P01:课程介绍和环境搭建\n' +
	'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
	'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
	'**这是加粗的文字**\n\n' +
	'*这是倾斜的文字*`\n\n' +
	'***这是斜体加粗的文字***\n\n' +
	'~~这是加删除线的文字~~ \n\n'+
	'\`console.log(111)\` \n\n'+
	'# p02:来个Hello World 初始Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n'+
	'***\n\n\n' +
	'# p03:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p04:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'#5 p05:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p06:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p07:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'```' +
	'```' +
	'``` var a=11; ```'
const ArticleDetail = props => {
	const { Container, LeftWrapper, RightWrapper } = useTwoColLayout()
	return (
		<div className="article-detail-wrapper">
			<Container>
				<LeftWrapper>
					<div className="article-title">
						深深的关怀固体我人品和客人呢
					</div>
					<div className="icons-info">
						<CalendarOutlined /> 2020-04-01
					</div>
					<div className="article-content">
						<MarkdownTpl
							content={content}/>
					</div>
				</LeftWrapper>
				<RightWrapper />
			</Container>
		</div>
	)
}

export default memo(ArticleDetail)
