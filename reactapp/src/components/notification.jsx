import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';
import "./notification.css"
const icons={
    success:<CheckCircleOutlineIcon></CheckCircleOutlineIcon>,
    error:<ErrorOutlineIcon></ErrorOutlineIcon>,
    warning:<WarningAmberIcon></WarningAmberIcon>,
    info:<InfoIcon></InfoIcon>
}

const Notification = (props) => {
    const handleClose=()=>{
       props.setClose(true);
    }
  return (
    <div className={`container ${props.notification.type}`}>
        <div className='content'>
        <div className='icon'>{icons[props.notification.type]}</div>
        <div className='message'>{props.notification.message}</div>
        </div>
        <div onClick={handleClose} className='close-icon'><CloseIcon></CloseIcon></div>            
    </div>
  )
}

export default Notification