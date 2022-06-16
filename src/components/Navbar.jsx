import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link className="navbar-brand" to="/">Smart Bank App</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">

                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/products">Products</Link>
                    <Link className="nav-item nav-link" to="/posts/2022/02">Posts</Link>
                    <Link className="nav-item nav-link" to="/admin">Admin</Link>

                </div>
            </div>
        </nav>





    )
}
