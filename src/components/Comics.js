import React, { Component } from 'react'
import home from './../asstes/images/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Comics extends Component {
  
    state={
      comics:[],
      images:[],
      status:false
    }

    loadComics=()=>{
      var key=  Global.key;
      var url = Global.urlApiMarvel + key;
      axios.get(url).then(response=>{
          this.setState({
            comics:response.data.data.results,
            status:true,
        })
        
      })
      this.loadImges();
      console.log(this.comics);
      
    }

    loadImges=()=>{
      
      for(var i = 0; i< this.comics.length; i++){
        if (this.comics[i].images != undefined){
          this.images.push(this.comics[i].images[0].path+'.jpg');
        }else{
          this.images.push("");
        }
        console.log(this.images);
      }
    }

  componentDidMount = () =>{
    this.loadComics();
    
  }
  render() {
    return (
      <div class="text-white">
        <div>
            <NavLink to={"/"} className="btn btn-danger">Volver</NavLink>
        </div>
        
        {
          this.state.comics.map((comics,index)=>{
            return(
              <div class="card bg-danger" style={{"width": "18rem","float": "left", "marginTop": "60px", "marginLeft": "20px", "marginRight": "20px", "marginBottom": "60px"}}>
                <img src="{{comics.image}}" class="card-img-top" alt="..." />
                <img v-else class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{ comics.title }</h5>
                  <p class="card-text">
                    
                  </p>
                  
                  <a to={"/"} class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}