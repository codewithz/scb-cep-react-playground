import React, { useState } from "react";

export function CompanyFunctionalComponent() {

    const [company, setCompany] = useState("SCB")
    const [countryOfOrigin, setCountryOfOrigin] = useState('UK')

    const changeCompanyAndCounty = () => {
        setCompany("Standard Chartered Bank")
        setCountryOfOrigin("United Kingdom")
    }

    return (
        <div>
            <h3>Company Component -- State in Functional</h3>
            <br />
            Company Name:{company}
            <br />
            Country of Origin: {countryOfOrigin}
            <br /><br />
            <button onClick={changeCompanyAndCounty}>
                Change
            </button>
        </div>
    )
}