import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends  Component {

    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : '' 
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users =>  this.setState({robots:users}));
     //   this.setState({robots:robots}); taking data from api instead of robot.js
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());    
        }) 
        
        //ternary statement 
        return !this.state.robots.length ? 
                <h1 className ='tc'> Loading.......</h1> :
        (
            <div className= 'tc'>
                <h1 className = 'f2'> Robomates </h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        );
     }
}

export default App;