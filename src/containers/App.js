import React from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll.js'




class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			Searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users =>this.setState({robots:users}))
	}


	onSearchChange = (event) => {
		this.setState({Searchfield : event.target.value});
	}

	render(){
		const {robots , Searchfield} = this.state;
		const filteredRobot = robots.filter(robot =>{
 			return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
 		})
 		return !robots.length ?
 			 <h1>Loading</h1> :
 			(
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox  searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobot}/>
				</Scroll>
			</div>
		);
	}
 		
}


export default App;