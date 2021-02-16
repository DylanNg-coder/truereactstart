import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import Userinput from "./UserInput/Userinput";
import Useroutput from "./UserOutput/Useroutput";

class App extends Component {
    state = {
        username:"Dylan"
    }
    ChangeUserNameHandler = (event) =>{
        this.setState(
            {
                username: event.target.value,
            }
        )
    }
  render() {
    return (
        <div className="App">
          <Userinput changed={this.ChangeUserNameHandler} currentName = {this.state.username}/>
          <Useroutput name={this.state.username}/>
        </div>
    );
  }
}

export default App;
