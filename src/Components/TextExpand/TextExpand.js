import React, { Component } from 'react';

import './textExpand.css'




class TextExpand extends Component {
    constructor(props) {
        super(props);
        this.state = { expand: false }
    }
    onToggle = () => {
        this.setState({ expand: !this.state.expand });
    }
    render() {
        return (
            <div  onClick={this.onToggle} className="TextExpand">
                <div className="TextExpand-container">
                    <div>
                        <div className="TextExpand-type">{this.props.type}</div>
                        <div className="TextExpand-type-title">{this.props.title}</div>
                    </div>
                    <div><span>{this.state.expand ? '-' : '+'}</span> </div>
                </div>
                <div className="TextExpand-expand" style={{display: this.state.expand ? 'block' : 'none' }}>{this.props.expandText}</div>
            </div>
        );
    }
}

export default TextExpand;