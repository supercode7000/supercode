import React, { Component } from 'react';
import GetSheetDone from 'get-sheet-done';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import StartSeite from './Components/StartSeite/StartSeite'
import KursSeite from './Components/KursSeite/KursSeite';



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
        <Router>
          <Switch>
            {/* component="" durch component={Zielcomponent} ersetzen */}
            <Route path="/" component={StartSeite} exact />
<<<<<<< HEAD
            <Route path="/kurse" component="" />
=======
            <Route path="/kurse" component={KursSeite} />
>>>>>>> 2f560595f1cc6746d08c15f25f95e8947c159ce1
            <Route path="/finanzierung" component="" />

            <Route path="/events" component="" />
            <Route path="/anmeldung" component="" />
            <Route path="/impressum" component="" />
            <Route path="/datenschutz" component="" />

            <Route component="" /> {/* für Error */}
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
