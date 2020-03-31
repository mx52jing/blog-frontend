import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from '@components/Loadable'

const Header = Loadable(() => import('@pages/Header'))
const Home = Loadable(() => import('@pages/Home'))
const Article = Loadable(() => import('@pages/Article'))

const AppComponent = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<>
				<Header />
				<Switch>
					<Route path="/article" component={Article} />
					<Redirect to="/" />
				</Switch>
			</>
		</Switch>
	</Router>
)

export default memo(AppComponent)
