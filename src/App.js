import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state ={ 
      users: []
    }
  }

  componentDidMount(){
    axios.get('/api/users').then(response => {
      this.setState({users: response.data})
    })
  }

  render(){

    console.log(this.state.users)
    return (
      <div className="App">
        {this.state.users ? this.state.users.map(el => {
          return (
            <div key={el.user_id} data={el.user_id}>
              <h1>{el.username}</h1>
              <h2>{el.fav_fruit}</h2>
            </div>
          )
        }): null}
      </div>
    );
  }
}

export default App;
