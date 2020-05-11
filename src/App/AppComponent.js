import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from '@components/Loadable'

const Header = Loadable(() => import('@pages/Header'))
const Footer = Loadable(() => import('@pages/Footer'))
const Home = Loadable(() => import('@pages/Home'))
const Article = Loadable(() => import('@pages/Article'))
const ArticleDetail = Loadable(() => import('@pages/ArticleDetail'))
const Category = Loadable(() => import('@pages/Category'))
const CategoryDetail = Loadable(() => import('@pages/CategoryDetail'))
const Archives = Loadable(() => import('@pages/Archives'))

const AppComponent = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<>
				<div className="section-wrapper">
					<Header/>
					<Switch>
						<Route exact path="/articles" component={Article}/>
						<Route path="/articles/:id" component={ArticleDetail}/>
						<Route exact path='/categories' component={Category}/>
						<Route path='/categories/:name' component={CategoryDetail}/>
						<Route path='/archives' component={Archives}/>
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
