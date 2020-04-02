import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from '@components/Loadable'

const Header = Loadable(() => import('@pages/Header'))
const Footer = Loadable(() => import('@pages/Footer'))
const Home = Loadable(() => import('@pages/Home'))
const Article = Loadable(() => import('@pages/Article'))
const ArticleDetail = Loadable(() => import('@pages/ArticleDetail'))

const AppComponent = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<>
				<div className="section-wrapper">
					<Header/>
					<Switch>
						<Route exact path="/article" component={Article}/>
						<Route path="/articleDetail" component={ArticleDetail}/>
						<Redirect to="/"/>
					</Switch>
					{/* 为了做 Sticky Footer */}
					<div className="poem"></div>
				</div>
				<Footer/>
			</>
		</Switch>
	</Router>
)

export default memo(AppComponent)
