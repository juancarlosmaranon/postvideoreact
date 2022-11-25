import React, { Component } from 'react'
import home from './../asstes/images/home.png'

export default class Home extends Component {
  render() {
    return (
      <div class="bg-secondary">
        <img src={home}/>
      </div>
    )
  }
}
