import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

class StartSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Navigation />);
    }
}

export default StartSeite;