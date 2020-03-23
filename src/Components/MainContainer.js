import React, { Component } from 'react'
import CardContainer from './CardContainer'

export default class MainContainer extends Component {
    state = {
        knots: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/knots')
            .then(response => response.json())
            .then(result => this.setState({
                knots: result
            }));
    }

    render() {
        return (
            <div>
                <CardContainer knots={this.state.knots}/>
            </div>
        )
    }
}
