import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
            <div class="bg-secondary">
                <h1>Menu Rutas</h1>
                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav className="navbar navbar-expand-lg bg-dark">

                    <div className="container-fluid">
                        {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                            <li className="nav-item bg-danger">
                                <NavLink className="nav-link text-light" to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
