import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">{this.props.title}</h1>
                    <p className="lead">{this.props.subtitle}</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron