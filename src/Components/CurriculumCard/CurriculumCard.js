import React, { Component } from 'react';


class CurriculumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
        onToggle = () => {
            if (props.email) {
                this.setState({ expand: !this.state.expand });
            }
        }
    }
    render() {
        return (
            <div className="CurriculumCard">
                <div className="CurriculumCard-Item">
                    <div className="CurriculumCard-title">
                        <div className="CurriculumCard-title-description">
                            {this.props.titleDescription}
                        </div>
                        <div className="CurriculumCard-title-title">
                            {this.props.titleTitle}
                        </div>
                    </div>
                    <div className="CurriculumCard-locked">
                        <span>{this.state.expand ? '-' : '+'}</span>
                    </div>
                </div>
                <div className="CurriculumCard-expand" style={{display: this.state.expand ? 'block' : 'none' }}>{this.props.expandText}</div>
            </div>
        );
    }
}




export default CurriculumCard;