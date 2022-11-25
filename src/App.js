import './App.css';
import Router from './Router';
import "bootstrap/dist/js/bootstrap.bundle";
import  'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faCheckSquare, faCoffee,faHouse } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div class="App bg-secondary">
      <Router/>
    </div>
  );
} 
library.add( faCheckSquare, faCoffee, faHouse, faBook);
export default App;
