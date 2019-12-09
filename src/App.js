import React, { Component } from 'react';
import Navigation from './Components/navigation/Navigation'
import GetSheetDone from 'get-sheet-done';



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
        <Navigation />
      </div>
    );
  }
}



export default App;
