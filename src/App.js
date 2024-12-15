import './App.css';
import { useEffect, useState } from 'react';
import { getUsers } from './serverRequests';
import Loader from './components/Loader';
import NewTable from './components/NewTable';

function App() {

  const [isLoading,setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [filters,setFilters] = useState({pagination:{skip:0,take:100}, sorting:{}, search:{name:'', email:[]}})
  const [totalCount, setTotalCount] = useState(0)


  useEffect(()=>{        
    renderUsers()
  },[filters])

  const renderUsers = async () => {
    setIsLoading(true)
    const {users, totalCount} = await getUsers(filters)
    setUsers(users)
    setTotalCount(totalCount)
    setIsLoading(false)
  }

  return (
    <div className="App">
      <div className='container'>
      <NewTable data={users} setFilters={setFilters} filters={filters} totalCount={totalCount} /></div>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
