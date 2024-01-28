import React from 'react'
import './styles/Alert_buttons.css'

const Alert_buttons = ( {setAlertButton, message }) => {

const handleOk = () => {
    setAlertButton(false)
}

  return (
    <div className='alert_container'>
        <div className='alert_content'>
            <div>{message}</div>
            <button className='alert_button' onClick={handleOk}>Ok</button>
        </div>
    </div>
  );
}


export default Alert_buttons