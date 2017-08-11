import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Welcome extends React.Component{
	render(){
		return(
			<div>
			<Header />
			<Footer />
			</div>
			);
	}
}

export default Welcome;