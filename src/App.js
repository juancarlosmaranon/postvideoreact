import './App.css';
import Router from './Router';
import "bootstrap/dist/js/bootstrap.bundle";
import  'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faCheckSquare, faCoffee,faHouse, faArrowLeft, faPlus, faPaperPlane, faCameraRetro, faDove, faTv, faBookOpen, faCircleInfo, faRss} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div class="App bg-secondary text-light ">
      <Router/>
    </div>
  );
} 
library.add( faCheckSquare, faCoffee, faHouse, faBook,faArrowLeft,faPlus, faPaperPlane, faCameraRetro, faDove, faTv, faBookOpen, faCircleInfo, faRss );
export default App;
