import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCameraRetro, faCircleInfo, faDove, faMinus, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
//IMPORTAMOS EL GLOBAL PARA TENER LA URL Y LA KEY EN GLOBAL Y 
//UTILIZARLO EN DISTINTOS COMPONENTES
import Global from '../Global'
//IMPORTAMOS EL AXIOS PARA REALIZAR LA CONSULTA
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Comics extends Component {
  
    //CREAMOS EL STATE PARA GUARDAR LAS VARIABLES QUE VAN A CAMBIAR
    //Y EN LAS QUE VAMOS A GUARDAR LA INFORMACION RECOGIDA DE LA API
    state={
      comics:[],
      ocultados:0,
      status:false
    }

    //FUNCION PARA CARGAR LOS COMICS
    loadComics=()=>{
      //LLAMAMOS A LA VARIABLE GLOBAL KEY Y URL
      var key=  Global.key;
      var url = Global.urlApiMarvelComics + key;
      //HACEMOS LA PETICION GET PARA RECOGER LOS DATOS DE LA API
      axios.get(url).then(response=>{
          this.setState({
            //SE LOS AÑADIMOS AL ARRAY COMICS
            comics:response.data.data.results,
            //Y CUANDO SE REALICE LE DAMPOS ESTADO TRUE
            status:true,
          })
        console.log(response.data.data.results[0].thumbnail.path+'.jpg');
      })
    }

    //ESTA FUNCION MUESTRA UNA FILA MENOS CADA VEZ QUE SE EJECUTA
    muestramenos=()=>{
      console.log(document.getElementById('contenedorcomics').childNodes.length)
      //CREAMOS LA VARIABLE OCULTADOS EN LA QUE RECOGEMOS LOS QUE ESTAN EN NONE
      //ENTONCES SE PUEDE REALIZAR LA FUNCION HAY MENOS DE 16 ELEMENTOS OCULTADOS
      if(this.state.ocultados !== 16){
        document.getElementById('btnmas').style.display='block';
        var menoscomics = document.getElementById('contenedorcomics').childNodes;
      menoscomics[menoscomics.length-1-this.state.ocultados].style.display='none';
      menoscomics[menoscomics.length-2-this.state.ocultados].style.display='none';
      menoscomics[menoscomics.length-3-this.state.ocultados].style.display='none';
      menoscomics[menoscomics.length-4-this.state.ocultados].style.display='none';
      //AÑADIMOS A LA VARIABLE OCULTADOS LOS 4 QUE OCULTAMOS
      this.setState({
        ocultados:this.state.ocultados+4
      })
      }
    }

    //ESTA FUNCION MUESTRA MAS ELEME
    muestramas=()=>{
      console.log(document.getElementById('contenedorcomics').childNodes.length)
      
      if(this.state.ocultados !== 0){
        var mascomics = document.getElementById('contenedorcomics').childNodes;
        mascomics[mascomics.length-this.state.ocultados].style.display='block';
        mascomics[mascomics.length+1-this.state.ocultados].style.display='block';
        mascomics[mascomics.length+2-this.state.ocultados].style.display='block';
        mascomics[mascomics.length+3-this.state.ocultados].style.display='block';
        this.setState({
          ocultados:this.state.ocultados-4
        })
      }
      document.getElementById('btnmenos').style.display='block';
    }

    componentDidUpdate=()=>{
      //SI OCULTADOS ES IGUAL A 16 NO SE MUESTRA EL BOTON MOSTRAR MENOS
      if(this.state.ocultados === 16){
        document.getElementById('btnmenos').style.display='none';
      }
      //Y SI ES IGUAL A 0 ELEMENTOS EN OCULTADOS NO SE PUEDE MOSTRAR MAS
      if(this.state.ocultados === 0){
        document.getElementById('btnmas').style.display='none';
        
      }
    }

  //CARGAMOS LA FUNCION DE CARGAR COMICS
  componentDidMount = () =>{
    this.loadComics();
  }

  render() {
    return (
      <div class="text-white">
        {/* BOTON PARA REGRESAR A LA VENTANA ANTERIOR */}
        <div style={{'marginTop':'30px'}}>
            <NavLink to={"/"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
        </div>
        <div id='contenedorcomics'>
        {
          //CREAMOS EL MAP PARA RECORRER EL ARRAY DONDE HEMOS  
          //GUARDADO TODA LA INFORMACION Y LA DIBUJAMOS
          this.state.comics.map((comics,index)=>{
            return(
              <div class="card bg-danger" style={{"width": "21rem",'height':'22.5rem' ,"float": "left", "marginTop": "40px", "marginLeft": "70px", "marginRight": "68px", "marginBottom": "60px"}} key={index}>
                <div class="card-body">
                  <img src={comics.thumbnail.path+'.jpg'} style={{'width':'150px','height':'200px'}} class="card-img-top" alt="..." />
                  <h6 class="card-title">{ comics.title }</h6>
                  {/* CREAMOS UN BOTON QUE MUESTRA DETALLES DEL COMIC 
                  CON UN ICONO DE INFO PARA HACERLO MAS INTUITIVO */}
                  <NavLink to={"/detallescomic/"+comics.id}  className="btn btn-dark" ><FontAwesomeIcon icon={faCircleInfo}/><br/>Detalles</NavLink>
                </div>
              </div>
            )
          })
        }
        </div>
        <div>
          {/* EL BOTON PARA MOSTRAR MAS CON ELICONO DEL + */}
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "830px"}}>
            <button className="btn btn-info"style={{'display':'none'}} onClick={this.muestramas} id='btnmas'><FontAwesomeIcon icon={faPlus}/><br/>Ver mas...</button>
          </div>
          {/* EL BOTON PARA MOSTRAR MENOS CON ELICONO DEL - */}
          <div style={{'marginTop':'30px','marginBottom':'40px',"float": "left","marginLeft": "70px"}}>
            <button className="btn btn-light" onClick={this.muestramenos} id='btnmenos'><FontAwesomeIcon icon={faMinus}/><br/>Ver menos</button>
          </div>
        </div>

        {/* PIE DE PAGINA */}
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