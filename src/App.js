import React, { Component } from 'react'
import './App.css'
import MainContainer from './Main/containers/Main'
import { SocialLinks, SocialDiv }  from './styled/Home.style'

const linkStyle = {
  listStyle: 'none',
  textDecoration: 'none',
  color:'red',
  margin: '20px',
  transform: 'rotate(90deg)',
  transformOrigin: 'left top'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
        </div>
    );
  }
}

export default App
