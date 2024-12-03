
const UserCard = ({user,isTitle}) =>{

return (
    <div className={'user-wrapper' + (isTitle? ' title' : '')}>
          <div className='user-value text-center'>{user.id}</div>
          <div className='user-value'>{user.name}</div>
          <div className='user-value'>{user.email}</div>
          <div className='user-value text-center'>{user.age}</div>
    </div>
)
}

export default UserCard