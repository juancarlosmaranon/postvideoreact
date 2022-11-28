import{ Component } from 'react'
import img2 from './../asstes/images/img2.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPaperPlane, faDove } from '@fortawesome/free-solid-svg-icons'


export default class News extends Component {
  
    render(){
      return(
        <div>
          <div>
            <h1 style={{'marginTop':'20px'}}>Noticias</h1>
          </div>
          <h3 style={{'marginTop':'100px'}}>Proximamente...</h3>
          <div style={{'marginTop':'530px', 'marginBottom':'20px'}}>
            <p>Redes sociales</p>
            <FontAwesomeIcon icon={faPaperPlane} style={{'margin':'20px','marginTop':'0px'}}/>
            <FontAwesomeIcon icon={faCameraRetro} style={{'margin':'20px','marginTop':'0px'}}/>
            <FontAwesomeIcon icon={faDove} style={{'margin':'20px','marginTop':'0px'}}/>
          </div>
        </div>
      )
    }
}