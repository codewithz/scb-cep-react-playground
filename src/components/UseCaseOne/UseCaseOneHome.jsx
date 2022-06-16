import React, { Component } from "react";
import { CompanyComponent } from "./CompanyComponent";
import { CompanyFunctionalComponent } from "./CompanyFunctionalComponent";
import CounterComponent from "./CounterComponent";
import { HelloComponent } from "./HelloComponent";
import { NameComponent } from "./NameComponent";
import { NameFunctionalComponent } from "./NameFunctionalComponent";

export class UseCaseOneHome extends Component {

    render() {
        return (
            <div>
                <h1>Use Case One</h1>
                <hr />
                <HelloComponent />
                <hr />
                <NameComponent name="Zartab" message="Hello World" />
                <hr />
                <NameFunctionalComponent name="Tom" message="Enjoy React!!" />
                <hr />
                <CompanyComponent />
                <hr />
                <CompanyFunctionalComponent />
                <hr />
                <CounterComponent />
            </div>
        )
    }
}