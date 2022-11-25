import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/comics' element={<Comics/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
