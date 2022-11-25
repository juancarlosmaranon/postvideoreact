import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons'
import Marvel  from './../asstes/images/marvel.png'

export default class MenuRutas extends Component {
    render() {
        return (
            <div class="bg-secondary">
                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav className="navbar navbar-expand-lg bg-dark">
                    <img src={Marvel} style={{'width':'200px'}} />

                    <div className="container-fluid">
                        {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                            <li className="nav-item " style={{"width":"100px"}}>
                                <NavLink className="nav-link text-light" to="/"><FontAwesomeIcon icon={faHouse} /></NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"50px"}}>
                                <NavLink className="nav-link text-light" to="/comics"><FontAwesomeIcon icon={faBook} /></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
