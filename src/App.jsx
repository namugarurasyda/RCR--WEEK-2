import React, { Component } from 'react'
import Greet from './components/func.components'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from   './assets/hero.png'
import './App.css'
import Hello from './components/hello'
import Welcome from './components/Welcome'


class App extends Component {
  // const [count, setCount] = useState(0)

  render() {
    return (
      <div className="App">
      <Greet class ="Syda"/> <br />
      <Welcome class = "Lamine" />
      <Hello name="John" />
      </div>
    )
  } 
}

export default App;
