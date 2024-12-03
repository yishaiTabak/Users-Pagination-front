import './App.css';
import PaginationWrapper from './components/PaginationWrapper';
import { useEffect, useState } from 'react';
import { getUsers } from './serverRequests';
import DisplayUsers from './components/DisplayUsers';
import Loader from './components/Loader';

function App() {

  const [isLoading,setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [filters,setFilters] = useState({pageNumber:1,pageSize:10})

  useEffect(()=>{
    renderUsers()
  },[filters])

  const renderUsers = async () => {
    setIsLoading(true)
    const take = (filters.pageNumber - 1) * filters.pageSize
    const newUsers = await getUsers(filters.pageSize, take)
    setUsers(newUsers)
    setIsLoading(false)
  }

  return (
    <div className="App">
      <div className='page-container'>
        <h2 className='page-title'>Users</h2>
        <DisplayUsers users={users} />
        <PaginationWrapper setFilters={setFilters} filters={filters} setIsLoading={setIsLoading} />
      </div>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
