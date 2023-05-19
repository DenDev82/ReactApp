import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  let role = "dev";
  const showEmployees = true;
  return (
    <div className="App">
      
      {showEmployees ? 
        <>
        
        <input type="text" onChange={(e)=>{
          console.log(e.target.value);
          role = e.target.value;
        }}/>
          <Employee name="Isus" role = "Intern"/>
          <Employee name="Denis" role = {role} />
          <Employee/>
        </>
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
