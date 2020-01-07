import React, { Component } from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            birthday: props.age
        }
    }
    handleClick = () => {
        this.setState({
            birthday: this.state.birthday + 1
        })
    }
    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick}> Button for {firstName} {lastName}'s birthday</button>
            </div>
        )
    }
}

export default PersonCard;