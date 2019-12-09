import React, { Component } from 'react';
import MethodikDidaktik from './Components/methodik-didaktik/MethodikDidaktik';
import Test from './Components/test/Test';
import Navigation from './Components/navigation/Navigation'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <MethodikDidaktik />
        <Test />
      </div>
    );
  }
}



export default App;
