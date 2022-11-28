import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCameraRetro, faCircleInfo, faDove, faMinus, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'

export default class Series extends Component {
  
    state={
      Series:[],
      ocultados:0,
      status:false
    }

    //FUNCION PARA CARGAR LOS Series
    loadSeries=()=>{
      var key=  Global.key;
      var url = Global.urlApiMarvelSeries + key;
      axios.get(url).then(response=>{
          this.setState({
            Series:response.data.data.results,
            status:true,
          })
        console.log(response.data.data.results[0].thumbnail.path+'.jpg');
      })
    }
    muestramas=()=>{
      console.log(document.getElementById('contenedorSeries').childNodes.length)
      
      if(this.state.ocultados !== 0){
        var masSeries = document.getElementById('contenedorSeries').childNodes;
        masSeries[masSeries.length-this.state.ocultados].style.display='block';
        masSeries[masSeries.length+1-this.state.ocultados].style.display='block';
        masSeries[masSeries.length+2-this.state.ocultados].style.display='block';
        masSeries[masSeries.length+3-this.state.ocultados].style.display='block';
        this.setState({
          ocultados:this.state.ocultados-4
        })
      }else{
        document.getElementById('btnmas').style.display='none';
      }
      document.getElementById('btnmenos').style.display='block';
    }

    muestramenos=()=>{
      console.log(document.getElementById('contenedorSeries').childNodes.length)
      
      if(this.state.ocultados !== 16){
        document.getElementById('btnmas').style.display='block';
        var menosSeries = document.getElementById('contenedorSeries').childNodes;
      menosSeries[menosSeries.length-1-this.state.ocultados].style.display='none';
      menosSeries[menosSeries.length-2-this.state.ocultados].style.display='none';
      menosSeries[menosSeries.length-3-this.state.ocultados].style.display='none';
      menosSeries[menosSeries.length-4-this.state.ocultados].style.display='none';
      this.setState({
        ocultados:this.state.ocultados+4
      })
      }else{
        document.getElementById('btnmenos').style.display='none';
      }
    }
    componentDidUpdate=()=>{
      if(this.state.ocultados === 16){
        document.getElementById('btnmenos').style.display='none';
      }
      if(this.state.ocultados === 0){
        document.getElementById('btnmas').style.display='none';
        
      }
    }


  componentDidMount = () =>{
    this.loadSeries();
    
  }
  render() {
    return (
      <div class="text-white">
        <div style={{'marginTop':'30px'}}>
            <NavLink to={"/"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
        </div>
        <div id='contenedorSeries'>
        {
          this.state.Series.map((Series,index)=>{
            return(
              <div class="card bg-danger" style={{"width": "21rem",'height':'22.5rem' ,"float": "left", "marginTop": "40px", "marginLeft": "70px", "marginRight": "68px", "marginBottom": "60px"}} key={index}>
                <div class="card-body">
                  <img src={Series.thumbnail.path+'.jpg'} style={{'width':'150px','height':'200px'}} class="card-img-top" alt="..." />
                  <h6 class="card-title">{ Series.title }</h6>
                  <p class="card-text">
                    
                  </p>
                  
                  <NavLink to={"/detallesserie/"+Series.id}  className="btn btn-dark" ><FontAwesomeIcon icon={faCircleInfo}/><br/>Detalles</NavLink>
                </div>
              </div>
            )
          })
        }
        </div>
        <div>
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "830px"}}>
            <button className="btn btn-info"style={{'display':'none'}} onClick={this.muestramas} id='btnmas'><FontAwesomeIcon icon={faPlus}/><br/>Ver mas...</button>
          </div>
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "70px"}}>
            <button className="btn btn-light" onClick={this.muestramenos} id='btnmenos'><FontAwesomeIcon icon={faMinus}/><br/>Ver menos</button>
          </div>
        </div>

        <div style={{'marginTop':'20px', 'marginBottom':'20px',"float": "left","marginLeft": "870px"}}>
          <p>Redes sociales</p>
          <FontAwesomeIcon icon={faPaperPlane} style={{'margin':'20px','marginTop':'0px'}}/>
          <FontAwesomeIcon icon={faCameraRetro} style={{'margin':'20px','marginTop':'0px'}}/>
          <FontAwesomeIcon icon={faDove} style={{'margin':'20px','marginTop':'0px'}}/>
        </div>
        
      </div>
    )
  }
}