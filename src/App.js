import './App.css';
import { Users } from './users';
import {useState} from 'react'
import Table from './table';

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <>
    <div className='container'>
      <input
       type='text' 
       className ='search' 
       onChange={(e)=> setQuery(e.target.value)}/>
      {/* <ul className='list'>
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user,id)=>(
          <li key={id} className='listeItem'>{user.first_name}</li>
        ))}
       

      </ul> */}

    </div>
    <Table data= {search(Users)}/>

    
    </>
    
   
  );
}

export default App;
