import GetSheetDone from 'get-sheet-done';
import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        GetSheetDone.raw('16eNHqHOT-YBv-NUJ07UIez9ZEzYus-ZIUp9up0aYPYE').then(sheet => {
            console.log(sheet)
        })
    }
    render() {
        return (<div>test</div>);
    }
}

export default Test;

