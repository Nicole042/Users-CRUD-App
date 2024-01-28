import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ( { createUser, userUpdate, updateUser, setUserUpdate, setIsFormClose, setAlertButton, setMessage, hasError}) => {
const {handleSubmit, register, reset} = useForm()

const handleAlert = () => {
      setAlertButton(true)
}

useEffect (() => {
    reset(userUpdate)
}, [userUpdate])

    const submit = data => {
        if (hasError) {
            return
        }
        
       if (userUpdate) {
        updateUser(userUpdate.id, data)
       } else {
        createUser(data)
        setMessage(`${data.first_name} was created successfully`)
       }
        reset({
            email: '',
            password: '',
            first_name:'',
            last_name:'',
            birthday:''
        })
        setIsFormClose(true)
    }

    const handleExit = () => {
        setIsFormClose(true)
        reset({
            email: '',
            password: '',
            first_name:'',
            last_name:'',
            birthday:''
        })
        setUserUpdate()
    }

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="form_x" onClick={handleExit}>x</div>
            <h2 className="form_title">{ userUpdate ? 'Update user' : 'Create new user' }</h2>
            <label className="form_label">
                <span className= "form_field_name">Email </span>
                <input autoComplete="false" className="form_field" {...register('email')} type="email"/>
            </label>
            <label className="form_label">
                <span className= "form_field_name">Password </span>
                <input autoComplete="false" className="form_field"{...register('password')} type="password" />
            </label>
            <label className="form_label">
                <span className= "form_field_name">First_name</span>
                <input autoComplete="false" className="form_field"{...register('first_name')} type="text" />
            </label>
            <label className="form_label">
                <span className= "form_field_name">Last_name</span>
                <input autoComplete="false" className="form_field"{...register('last_name')} type="text" />
            </label>
            <label className="form_label">
                <span className= "form_field_name">Birthday</span>
                <input autoComplete="false" className="form_field"{...register('birthday')} type="date" />
            </label>
            <button onClick={handleAlert} className="form_btn"> { userUpdate ? 'Update' : 'Add' }</button>
        </form>
    );
}

export default FormUser