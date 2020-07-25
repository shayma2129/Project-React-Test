import React,{ useState }  from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login.js'
import HomePage from './components/HomePage/HomePage.js'
import Register from './components/Register/Register.js';
import AdminRoutes from './components/AdminRoutes/AdminRoutes';
import { listUsers } from "./services/Userservice.js";
import BookPageList from './components/BookPageList/BookPageList';
import ProfileList from './components/ProfileList/ProfileList';

function App() {
  const [users , setUsers] = useState(listUsers);
  const addUser= (firstname,lastname,email,password,confirmPassword)=>{
      setUsers([...users,{id:users.length+1,firstname,lastname,email,password,confirmPassword}])
   } 
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const fetchUserByEmail = async (email) => {
    await delay(500);
    return users.find((user) => user.email === email);
  };
 

  return (
    <div className="App">
     
     <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home">
             <HomePage/>
          </Route>
          <Route path="/admin">
            <AdminRoutes/>
          </Route>
          <Route exact path="/BookPage">
            <BookPageList/>
          </Route>
          <Route exact path="/Profil">
          <ProfileList/>

          </Route>
          <Route exact path="/login">
               <Login fetchUserByEmail={fetchUserByEmail} />
          </Route>
          <Route exact path="/register">
               <Register addUser ={addUser} users={users}/>
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
