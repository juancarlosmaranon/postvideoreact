import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
