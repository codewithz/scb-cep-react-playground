import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AccountDetails() {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts();
    }, [])

    const getAccounts = async () => {
        const promise = axios.get('http://localhost:9099/accounts')
        const result = await promise;
        console.log(result)
        const { data } = result;
        console.log('---------------------------')
        console.log(data)
        console.log("------------------------")
        console.log(data.body)
        setAccounts(data.body)
    }

    return (
        <div>
            <button
                className="btn btn-primary"
                style={{ marginBottom: 20, marginTop: 20 }}>
                Add
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Balance</th>
                        <th>Credit Limit</th>
                        <th>Account Creation Date</th>
                    </tr>


                </thead>
                <tbody>
                    {
                        accounts.map(
                            (account) => (
                                <tr key={account.accountNumber}>
                                    <td>{account.accountNumber}</td>
                                    <td>{account.name}</td>
                                    <td>{account.nationality}</td>
                                    <td>{account.balance}</td>
                                    <td>{account.creditLimit}</td>
                                    <td>{account.accountCreationDate}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
