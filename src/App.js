import React, { Component } from 'react';
import MethodikDidaktik from './Components/methodik-didaktik/MethodikDidaktik';
import GetSheetDone from 'get-sheet-done';
import Home from './Components/Home/Home';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount() {
    GetSheetDone.raw('16eNHqHOT-YBv-NUJ07UIez9ZEzYus-ZIUp9up0aYPYE').then(sheet => {
      console.log(sheet)
    })
  }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}



export default App;
