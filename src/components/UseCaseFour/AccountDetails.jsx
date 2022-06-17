import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AccountDetails() {

    const [accounts, setAccounts] = useState([])
    const [accountNumber, setAccountNumber] = useState(0)

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

    const handleAccountNumber = (event) => {
        setAccountNumber(event.target.value)
        console.log("Account Number changed")
    }

    const addAccount = async () => {
        console.log("Account Addition")
        const newAccount = {
            accountNumber: accountNumber,
            name: 'Some Name',
            nationality: 'Indian',
            balance: 0,
            creditLimit: 10000,
            accountCreationDate: new Date()
        }

        const promise = axios.post('http://localhost:9099/accounts', newAccount)
        const result = await promise;
        console.log(result)
        // getAccounts()
    }

    const deleteAccount = async (account) => {
        try {
            const apiEndPoint = `http://localhost:9099/accounts/${account.accountNumber}`
            const promise = axios.delete(apiEndPoint)
            const result = await promise;
            console.log(result)
            getAccounts();
        }
        catch (error) {
            // Expected (404: Not found,400: bad message) -- CLient errors
            // Display a speefic error message
            console.log(error)
            if (error.response && error.response.status === 404) {
                alert('This account is already deleted')
            }
            //Unexpected Errors (Network DOwn, Server Down, DB Error, Bug)
            // Log it
            // Display a generic message
            else {
                console.log("Logging the error", error)
                alert('Something failed while deleting this account')
            }

        }
    }

    return (
        <div>
            Account Number: <input type="text" onChange={handleAccountNumber} />
            <button
                className="btn btn-primary"
                style={{ marginBottom: 20, marginTop: 20 }}
                onClick={addAccount}
            >
                Add
            </button>
            <hr />
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
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm m-2"
                                            onClick={() => deleteAccount(account)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
