import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.scss'


function App() {
  return (
    <Router> 
    <Navbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
  
    </Routes>
    </div>

    </Router>
    
  );
}

export default App;
