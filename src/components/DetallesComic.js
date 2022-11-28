import{ Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


export default class DetallesComic extends Component {

    state={
        comic:[],
        fecha:{},
        status:false
    }

    loadComics=()=>{
        var key=  Global.key;
        var idcomic = this.props.id;
        var url = Global.urlApiMarvelComics+'/' + idcomic + key;
        axios.get(url).then(response=>{
            this.setState({
              comic:response.data.data.results,
              status:true,
              fecha:response.data.data.results[0].dates[0].date
            })
          console.log(response.data.data.results[0].dates[0].date);
        })
    }

    componentDidMount=()=>{
        this.loadComics();
    }
  
    render(){
      return(
        <div class="text-white">
            <div style={{'marginTop':'30px'}}>
                <NavLink to={"/series"} className="btn btn-danger"><FontAwesomeIcon icon={faArrowLeft}/><br/>Volver</NavLink>
            </div>
          {
            this.state.comic.map((comic,index)=>{
                return(
                    <div key={index}>
                        <img src={comic.thumbnail.path+'.jpg'} style={{'marginTop':'30px','alignItems':'center','width':'350px','height':'520px'}}/>
                        <div style={{'alignItems':'center'}}>
                            <h2 style={{'marginTop':'20px'}}>{comic.title}</h2>
                            {/* UTILIZAMOS EL SLICE PARA RECORTAR LA INFORMACION SOBRATE DEL DATE */}
                            <h4 style={{'marginTop':'20px'}}>Publicado: {this.state.fecha.slice(0,10)}</h4>
                        </div>
                    </div>
                )
            })
          }
        </div>
      )
    }
}