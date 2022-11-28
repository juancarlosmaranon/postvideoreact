import './App.css';
//IMPORTAMOS EL ROUTER Y LAS LIBRERIAS DE BOOTSTRAP
import Router from './Router';
import "bootstrap/dist/js/bootstrap.bundle";
import  'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//TAMBIEN IMPORTAMOS LAS LIBRERIAS DE FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faCheckSquare, faCoffee,faHouse, faArrowLeft, faPlus, faPaperPlane, faCameraRetro, faDove, faTv, faBookOpen, faCircleInfo, faRss, faMinus} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div class="App bg-secondary text-light ">
      <Router/>
    </div>
  );
} 

//AÑADIMOS LOS ICONOS DE LA LIBRERIA A UTILIZAR EN LA APLICACION
library.add( faCheckSquare, faCoffee, faHouse, faBook,faArrowLeft,faPlus, faPaperPlane, faCameraRetro, faDove, faTv, faBookOpen, faCircleInfo, faRss,faMinus );
export default App;
