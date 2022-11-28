import{ Component } from 'react'
import img2 from './../asstes/images/img2.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPaperPlane, fa2x, faDove } from '@fortawesome/free-solid-svg-icons'


export default class Home extends Component {
  
    render(){
      return(
        <div>
          <div>
            <h1 style={{'marginTop':'20px'}}>Inicio</h1>
            <img src={img2} style={{'width':'800px','marginBottom':'40px','marginTop':'20px'}}/>
            <h2>Descripcion de la pagina</h2>
            <p>La pagina web se basa en la implementacion de Fontaswesome que es una librereia de iconos,<br/>
              consta de tres ventanas en las que se importan difernetes iconos para hacerlo todo mas visual,<br/>
              se asocian a funcionalidades distinitas para el consummo de un API.
            </p>
          </div>
          <div style={{'marginTop':'120px', 'marginBottom':'20px'}}>
            <p>Redes sociales</p>
            <FontAwesomeIcon icon={faPaperPlane} style={{'margin':'20px','marginTop':'0px'}}/>
            <FontAwesomeIcon icon={faCameraRetro} style={{'margin':'20px','marginTop':'0px'}}/>
            <FontAwesomeIcon icon={faDove} style={{'margin':'20px','marginTop':'0px'}}/>
          </div>
        </div>
      )
    }
}