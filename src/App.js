import './App.css';
import PaginationWrapper from './components/PaginationWrapper';
import { useEffect, useState } from 'react';
import { getUsers, postRandomUsers } from './serverRequests';
import DisplayUsers from './components/DisplayUsers';
import Loader from './components/Loader';

function App() {

  const [isLoading,setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [filters,setFilters] = useState({pageNumber:1,pageSize:10})
  const [reRenderCount,setReRenderCount] = useState(false)

  useEffect(()=>{
    renderUsers()
  },[filters])

  const renderUsers = async () => {
    setIsLoading(true)
    const skip = (filters.pageNumber - 1) * filters.pageSize
    const newUsers = await getUsers(filters.pageSize, skip)
    setUsers(newUsers)
    setIsLoading(false)
  }

  const onPostUsers = async() =>{
    setIsLoading(true)
    await postRandomUsers(200)
    setReRenderCount(!reRenderCount)
    setFilters({...filters})
    setIsLoading(false)
  }

  return (
    <div className="App">
      <div className='page-container'>
        <h2 className='page-title'>Users</h2>
        <button className='post-random-btn' onClick={onPostUsers}>Post Random Users</button>
        <DisplayUsers users={users} />
        <PaginationWrapper setFilters={setFilters} filters={filters} setIsLoading={setIsLoading} reRenderCount={reRenderCount} />
      </div>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
