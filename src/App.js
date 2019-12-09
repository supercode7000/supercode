import React, { Component } from 'react';
import MethodikDidaktik from './Components/methodik-didaktik/MethodikDidaktik';
import Test from './Components/test/Test';
import Navigation from './Components/navigation/Navigation'
import Footer from './Components/footer/Footer';


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
        
        <Footer />
      </div>
    );
  }
}



export default App;
