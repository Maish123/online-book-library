import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
