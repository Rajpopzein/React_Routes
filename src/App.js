import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
//import Content from './component/content.jsx';
import Contact from './component/Contact.jsx';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
           <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Routes>
         <Route path='/'  element={<Home />}/>
         <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
