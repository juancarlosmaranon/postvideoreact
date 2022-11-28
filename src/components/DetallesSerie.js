import{ Component } from 'react'
import img2 from './../asstes/images/img2.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPaperPlane, fa2x, faDove, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


export default class DetallesSerie extends Component {

    state={
        Serie:[],
        fecha:{},
        status:false
    }

    loadSeries=()=>{
        var key=  Global.key;
        var idSerie = this.props.id;
        var url = Global.urlApiMarvelSeries+'/' + idSerie + key;
        axios.get(url).then(response=>{
            this.setState({
              Serie:response.data.data.results,
              status:true,
              fecha:response.data.data.results.modified
            })
          console.log(response.data.data.results[0].dates[0].date);
        })
    }

    componentDidMount=()=>{
        this.loadSeries();
    }
  
    render(){
      return(
        <div class="text-white">
            <div style={{'marginTop':'30px'}}>
                <NavLink to={"/series"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
            </div>
          {
            this.state.Serie.map((Serie,index)=>{
                return(
                    <div key={index}>
                        <img src={Serie.thumbnail.path+'.jpg'} style={{'marginTop':'30px','alignItems':'center','width':'350px','height':'520px'}}/>
                        <div style={{'alignItems':'center'}}>
                            <h2 style={{'marginTop':'20px'}}>{Serie.title}</h2>
                            <h4 style={{'marginTop':'20px'}}>Publicado: {Serie.modified.slice(0,10)}</h4>
                        </div>
                    </div>
                )
            })
          }
        </div>
      )
    }
}