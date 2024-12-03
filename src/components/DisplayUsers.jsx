import React from 'react';
import '../styles/_displayUsers.css'
import UserCard from './UserCard';

const DisplayUsers = ({users}) => {
  return (
    users.length > 0 ?
    <div className='users-container'>
        <UserCard user={{name:'Name', id:"ID", email:"Email", age:"Age"}} isTitle={true}/>
        <div className='scrollable-users'>
        {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    </div> :
    <h2>Users Don't Found</h2>
  );
};

export default DisplayUsers;
