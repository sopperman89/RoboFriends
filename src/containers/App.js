import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

//we need a state here (state is an object that describes the application)

class App extends Component {
  constructor() {
    //constructor is required when you declare a class (it basically contructs the component your working on)
    super(); //super is required whenever you exted a class so you have access to the state
    this.state = {
      Robots: [], //allows the App to access the array dynamically
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  onSearchChange = (event) => {
    //need this so that the searchfield will do things (names are made up dont stress on it)
    this.setState({ searchfield: event.target.value }); //using setState allows the input from the searchfield to change the state of the searchfield
  };

  render() {
    const { Robots, searchfield } = this.state;
    const filteredRobots = Robots.filter((Robots) => {
      //accessing the robots array and filtering them when we type something in the searchfield
      return Robots.name
        .toLowerCase() //accessing the names of the robots and pulls them as all lowercase
        .includes(searchfield.toLowerCase()); //compares the names of all robots in the array in lowercase to what is typed into the seachfield in all lowercase and returns the matches
    });
    return !Robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList Robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
