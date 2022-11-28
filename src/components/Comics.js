import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
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
      var url = Global.urlApiMarvelComics + key;
      axios.get(url).then(response=>{
          this.setState({
            comics:response.data.data.results,
            status:true,
          })
        console.log(response.data.data.results.thumbnail.path+'jpg');
      })
      
      // this.loadImges();
    }

    // loadImges=()=>{
    //   for(var i = 0; i< this.comics.map; i++){
    //     if (this.comics[i].images !== undefined){
    //       this.images.push(this.comics[i].images[0].path+'.jpg');
    //     }else{
    //       this.images.push("");
    //     }
    //     console.log(this.images);
    //   }
    // }

  componentDidMount = () =>{
    this.loadComics();
    
  }
  render() {
    return (
      <div class="text-white">
        <div style={{'marginTop':'30px'}}>
            <NavLink to={"/"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
        </div>
        {
          this.state.comics.map((comics,index)=>{
            return(
              <div class="card bg-danger" style={{"width": "21rem",'height':'15rem' ,"float": "left", "marginTop": "40px", "marginLeft": "70px", "marginRight": "68px", "marginBottom": "60px"}} key={index}>
                {
                  //hacer otro map para las imagenes
                }
                <div class="card-body">
                  <img src="{{comics.thumbnail.path}}+'.jpg'" class="card-img-top" alt="..." />
                  <h5 class="card-title">{ comics.title }</h5>
                  <p class="card-text">
                    
                  </p>
                  
                  <NavLink to={"/"} className="btn btn-dark" ><FontAwesomeIcon icon={faCircleInfo}/><br/>Detalles</NavLink>
                </div>
              </div>
            )
          })
        }
        <div>
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "830px"}}>
            <NavLink to={"/"} className="btn btn-info"><FontAwesomeIcon icon={faPlus}/><br/>Ver mas...</NavLink>
          </div>
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "70px"}}>
            <NavLink to={"/"} className="btn btn-light"><FontAwesomeIcon icon={faPlus}/><br/>Ver menos</NavLink>
          </div>
        </div>
        
      </div>
    )
  }
}