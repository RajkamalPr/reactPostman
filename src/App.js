import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import Mainbody from './Mainbody';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Mainbody/>
      </Router>
    </div>
  );
}

export default App;
