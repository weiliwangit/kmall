import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom';
import AdList from './list.js'
import AdSave from './save.js'

class Ad extends Component {
	render(){
		return(
			<Switch>
				<Route path="/ad/save/:adId?" component={AdSave} />
				<Route path="/ad/" component={AdList} />
			</Switch>
		)
	}
}

export default Ad