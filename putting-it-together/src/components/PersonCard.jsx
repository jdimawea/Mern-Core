import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = () => {
        this.setState({ age: this.state.age += 1 })
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;

        return (
        <div className="card">
            <div className="content">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="birthday-button" onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button> 
            </div>
        </div>
        )
    }
}

export default PersonCard;