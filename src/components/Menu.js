import React, { Component } from 'react'
//IMPORTAMOS EL NAVLINK PARA NAVEGAR ENTRE COMPONENTES
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBookOpen, faRss, faTv } from '@fortawesome/free-solid-svg-icons'
import Marvel  from './../asstes/images/marvel.png'

export default class MenuRutas extends Component {
    render() {
        return (
            <div class="bg-secondary">
                <nav className="navbar navbar-expand-lg bg-dark">
                    {/* LE DAMOS ENLACE A LA IMAGEN PARA REGRESAR A INICIO DESDE CUALQUIER VENTANA */}
                    <NavLink className="nav-link text-white-50" to="/"><img src={Marvel} style={{'width':'200px'}} /></NavLink>

                    <div className="container-fluid">
                        {/* AÑADIMOS LOS ICONOS CON UN NOMBRE Y SU RUTA AL COMPONENTE */}
                        <ul class="navbar-nav">
                            <li className="nav-item " style={{"width":"100px"}}>
                                {/* ICONO DE UNA CASA PARA HACER REFERENCIA AL INICIO */}
                                <NavLink className="nav-link text-white-50" to="/"><FontAwesomeIcon icon={faHouse}/><br/>Inicio</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                {/* ICONO DE UN LIBRO ABIERTO PARA HACER REFERENCIA A COMICS */}
                                <NavLink className="nav-link text-white-50" to="/comics"><FontAwesomeIcon icon={faBookOpen}/><br/>Comics</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                {/* ICONO DE UNA TV PARA HACER REFERENCIA A LAS SERIES */}
                                <NavLink className="nav-link text-white-50" to="/series"><FontAwesomeIcon icon={faTv}/><br/>Series</NavLink>
                            </li>
                            <li className="nav-item " style={{"width":"100px"}}>
                                {/* ICONO DE RSS PARA HACER REFERENCIA A LAS NOTICIAS */}
                                <NavLink className="nav-link text-white-50" to="/news"><FontAwesomeIcon icon={faRss}/><br/>News</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
