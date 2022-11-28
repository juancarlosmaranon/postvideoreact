import React, { Component } from 'react';
//IMPORTAMOS LOS COMPONENTES CREADOS
import Menu from './components/Menu';
//IMPORTAMOS EL ROUTE, BROWSERROUTE Y USEPARAMS PARA
//NAVEGAR ENTRE COMPONENTES Y PASAR PARAMETROS 
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';
import Series from './components/Series'
import News from './components/News';
import DetallesComic from './components/DetallesComic'
import DetallesSerie from './components/DetallesSerie';

export default class Router extends Component {
    render() {

        //PASAMOS EL PARAMENTRO RECOGIDO 
        function DetallesComicElement(){
            var {id} = useParams();
            return(
                <DetallesComic id={id}/>
            )
        }

        function DetallesSerieElement(){
            var {id} = useParams();
            return(
                <DetallesSerie id={id}/>
            )
        }

        return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    {/* CREAMOS LAS RUTAS HACIA LOS COMPONENTES */}
                    <Route path='/' element={<Home/>} />
                    <Route path='/comics' element={<Comics/>}/>
                    <Route path='/series' element={<Series/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/detallescomic/:id' element={<DetallesComicElement/>}/>
                    <Route path='/detallesserie/:id' element={<DetallesSerieElement/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
