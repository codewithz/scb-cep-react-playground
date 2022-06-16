import React, { Component } from "react";

export class NameComponent extends Component {

    render() {
        const message = this.props.message
        const { name } = this.props;

        return (
            <div>
                <h3>Name Component</h3>
                Name: {name}
                <br />
                Message: {message}
            </div>
        )
    }
}