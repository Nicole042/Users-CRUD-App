
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose, setAlertButton, setMessage }) => {

  const handleDelete = () => {
    deleteUser(user.id)
    setMessage(`${user.first_name} was deleted successfully`)
    setAlertButton(true)
  }

  const handleEdit =() => {
    setUserUpdate(user)
    setMessage(`${user.first_name} was edited successfully`)
    setIsFormClose(false)
  }
  return (
    <article className="card">
      <h2 className="card_name">{user.first_name} {user.last_name}</h2>
      <ul className="card_list">
        <li><span className="card_email_title">Email: </span>
        <br />
        <span className="card_email_content">{user.email}</span></li>
        <li><span className="card_birth_title">Birthday: </span>
        <br />
        <span className="card_birth_content">{user.birthday}</span></li>
        <hr />
      </ul>
      <footer className="card_icons">
        <button className="card_trash" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard