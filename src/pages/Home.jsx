import React from 'react'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <div>
      {/* Search Component */}
      <UserSearch/>
      <h1 className='text-6xl'><UserResult/></h1>
    </div>
  )
}

export default Home