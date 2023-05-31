
import { Component } from 'react'
import Nav from './components/Nav'
import MainContent from './components/main_content'

class App extends Component {
  state = {
    counter:0,
  };
  
  render() {
    return (
      <div className='main_container'>
        <Nav />
        <MainContent />
      </div>
    );
  }
}

export default App
