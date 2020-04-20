import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from '@components/Loadable'

const Header = Loadable(() => import('@pages/Header'))
const Footer = Loadable(() => import('@pages/Footer'))
const Home = Loadable(() => import('@pages/Home'))
const Article = Loadable(() => import('@pages/Article'))
const ArticleDetail = Loadable(() => import('@pages/ArticleDetail'))
const Category = Loadable(() => import('@pages/Category'))

const AppComponent = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<>
				<div className="section-wrapper">
					<Header/>
					<Switch>
						<Route path="/articles" component={Article}/>
						<Route path="/articleDetail/:id" component={ArticleDetail}/>
						<Route path='/categories' component={Category}/>
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
