import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import Alert_buttons from './components/Alert_buttons'

function App() {
  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [alertButton, setAlertButton] = useState(false)
  const [message, setMessage] = useState('')
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser, hasError, setHasError] = useFetch(baseUrl)

  useEffect (() => {
    getUsers()
  }, [])

const handleOpenForm = () => {
  setIsFormClose(false)
}

const handleReset = () => {
  setHasError(false)
  setAlertButton(false)
}
  return (
    
      hasError ? 
      <div className='error_container'>
        <div className='error_message'>Error when entering data in the form, make sure you fill out all the fields.</div>
        <button className='error_button' onClick={handleReset}>Ok</button> 
      </div>
      : 
    <div className='container'>
      <div className='header'>
        <h1 className='title'>Users</h1>
        <button className='form_button' onClick={handleOpenForm}>+ Create new user</button>
      </div>
      <div className={`form_container ${isFormClose && 'form_close'}`}>
      <FormUser 
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        hasError={hasError}
        setUserUpdate={setUserUpdate}
        setIsFormClose={setIsFormClose}
        setAlertButton={setAlertButton}
        setMessage={setMessage}
        user={users}/>
      </div>
      <div className='container_cards'>
        {
          users?.map( user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
            setAlertButton={setAlertButton}
            setMessage={setMessage}
            />
          ))
        }
      </div>
      {
        alertButton ?
        <div>
        <Alert_buttons
          alertButton={alertButton}
          setAlertButton={setAlertButton} 
          userUpdate={userUpdate}
          message={message}
        />
      </div> : <></>
      }

    </div>
  )
}

export default App
