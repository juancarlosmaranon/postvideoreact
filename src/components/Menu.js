import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHouse, faBookOpen, faRss } from '@fortawesome/free-solid-svg-icons'
import Marvel  from './../asstes/images/marvel.png'

export default class MenuRutas extends Component {
    render() {
        return (
            <div class="bg-secondary">
                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav className="navbar navbar-expand-lg bg-dark">
                    
                    <NavLink className="nav-link text-white-50" to="/"><img src={Marvel} style={{'width':'200px'}} /></NavLink>

                    <div className="container-fluid">
                        {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                            <li className="nav-item " style={{"width":"100px"}}>
                                <NavLink className="nav-link text-white-50" to="/"><FontAwesomeIcon icon={faHouse}/><br/>Inicio</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                <NavLink className="nav-link text-white-50" to="/comics"><FontAwesomeIcon icon={faBook}/><br/>Comics</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                <NavLink className="nav-link text-white-50" to="/series"><FontAwesomeIcon icon={faBookOpen}/><br/>Series</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                <NavLink className="nav-link text-white-50" to="/news"><FontAwesomeIcon icon={faRss}/><br/>News</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
