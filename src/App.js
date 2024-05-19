import './App.css';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Categoria from './pages/Categoria';
import Contacto from './pages/Contacto';
import Registrar from './pages/Registrar';
import Formulario from './Components/Formulario';


function App() {
  return (
    <div className="App">

        <Router>
          <Nav/>
          <Routes>
            <Route path='/' exact Component= {Home}></Route>
            <Route path='/Productos' exact Component= {Productos}></Route>
            <Route path='/categoria' exact Component= {Categoria}></Route>
            <Route path='/Contacto' exact Component= {Contacto}></Route>
            <Route path='/Registrar' exact Component= {Registrar}></Route>
            <Route path='/Formulario' exact Component= {Formulario}></Route>
          </Routes>
        </Router>
   
    </div>
  );
}

export default App;
