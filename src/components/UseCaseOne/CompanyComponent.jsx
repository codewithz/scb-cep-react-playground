import React, { Component } from "react";

export class CompanyComponent extends Component {

    state = {
        company: 'SCB',
        countryOfOrigin: 'UK'
    }

    changeCompany = () => {
        alert('I am clicked')
        this.setState(
            {
                company: 'Standard Chartered Bank',
                countryOfOrigin: 'United Kingdom'
            }
        )
    }

    render() {
        return (
            <div>
                <h3>Company Component -- State</h3>
                <br />
                Company Name: {this.state.company}
                <br />
                Country of Origin: {this.state.countryOfOrigin}
                <br /><br />
                <button 
                onClick={this.changeCompany}>
                    Change
                    </button>
            </div>
        )
    }
}