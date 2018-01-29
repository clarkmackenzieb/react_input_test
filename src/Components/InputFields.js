import React, { Component } from 'react';

export default class InputFields extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(val) {
        this.setState({ text: val })
    }

    handleDelete() {
        this.setState({ text: "" })
        document.getElementById('someInput').value = '';
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input id="someInput" type="text" placeholder="name" onChange={(event) => this.handleChange(event.target.value)} />
                <button onClick={() => { this.handleDelete() }}>DELETE MACKENZIE</button>
            </div>
        )
    }
}