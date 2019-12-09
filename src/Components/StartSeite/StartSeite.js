import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

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