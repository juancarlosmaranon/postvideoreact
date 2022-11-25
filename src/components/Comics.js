import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global';
import axios from 'axios';

export default class MenuRutas extends Component {

    state = {
        comics: [],
        statusCom: false
    }

    getComics = () => {
        var request = '';
        var key = request + Global.key;
        var url = Global.urlApiMarvel + key;
        axios.get(url).then(response => {
            this.setState({
                comics: response.data.results,
                statusCom: true
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.comics.map((comics, index) => {
                        return (
                            <div class="card bg-danger" style="width: 18rem">
                                <img src="{comic.images}.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{comics.title}</h5>
                                    <p class="card-text">

                                    </p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div >
        )
    }
}