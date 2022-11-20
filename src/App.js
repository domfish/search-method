import './App.css';
import { Users } from './users';
import {useState} from 'react'

function App() {
  const [query, setQuery] = useState("")
  console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));
  return (
    <>
    <div className='container'>
      <input
       type='text' 
       className ='search' 
       onChange={(e)=> setQuery(e.target.value)}/>
      <ul className='list'>
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user,id)=>(
          <li key={id} className='listeItem'>{user.first_name}</li>
        ))}
       

      </ul>

    </div>

    
    </>
    
   
  );
}

export default App;
