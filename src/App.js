import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './Form'
import User from './User'
function App() {
  const [users,setUsers]=useState(null);
  useEffect(()=>{
    console.log(users);
  },[users])
  const addUser=(newUser)=>{
    if(users===null)
    {
      setUsers([newUser]);
    }
    else{
      setUsers(curr=> [...curr,newUser])
    }
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form addUser={addUser}/>}/>
          <Route path='users' element={<User users={users}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
