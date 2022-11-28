import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Series extends Component {
  
    state={
      series:[],
      images:[],
      status:false
    }

    loadSeries=()=>{
      var key=  Global.key;
      var url = Global.urlApiMarvelSeries + key;
      console.log(url);
      axios.get(url).then(response=>{
          this.setState({
            series:response.data.data.results,
            status:true,
        })
        console.log(response.data.data.results)
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
    this.loadSeries();
    
  }
  render() {
    return (
      <div class="text-white">
        <div style={{'marginTop':'30px'}}>
            <NavLink to={"/"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
        </div>
                {
                    this.state.series.map((series,index)=>{
                        return(
                            <div class="card bg-danger" style={{"width": "21rem",'height':'15rem' ,"float": "left", "marginTop": "40px", "marginLeft": "70px", "marginRight": "68px", "marginBottom": "60px"}} key={index}>
                                <div class="card-body">
                                    <img src="{{series.thumbnail.path}}+'.jpg'" class="card-img-top" alt="..." />
                                    <h5 class="card-title">{ series.title }</h5>
                                    <p class="card-text">
                                        
                                    </p>
                                    
                                    <NavLink to={"/"} className="btn btn-dark" ><FontAwesomeIcon icon={faCircleInfo}/><br/>Ver mas...</NavLink>
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