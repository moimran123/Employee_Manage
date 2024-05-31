import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import FooterComponent from './components/FooterComponents';
import HeaderComponent from './components/HeaderComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponents from './components/AddEmployeeComponents';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Main_Page from './components/Main_Page';
import SearchEmployeeComponent from './components/SearchEmployeeComponent';
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='wrapper'>
      <Router>
     
      <Routes>
            
              <Route path="/home" element= { <Home/>} />
              <Route path="/login" element= { <Login/>}  />
              <Route path="/" element= { <Register/>} />
              <Route path="/main" element= { <Main_Page/>} />
              <Route path="/search-employee" element={<SearchEmployeeComponent />} />
              <Route path="/data" element={<ListEmployeeComponent />} />
              {/* <Route path="/home" element={<LoginForm />} /> */}
              <Route path="/employee" element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element={<AddEmployeeComponents />} />
              <Route path="/edit-employee/:empid" element={<AddEmployeeComponents />} />


            </Routes>
        {/* <HeaderComponent />
        {isAuthenticated ? (
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />} />
              <Route path="/home" element={<LoginForm />} />
              <Route path="/employee" element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element={<AddEmployeeComponents />} />
              <Route path="/edit-employee/:empid" element={<AddEmployeeComponents />} />
            </Routes>
             
          </div>
        ) : null}
        <FooterComponent /> */}
      </Router>
    </div>
  );
}


export default App;

