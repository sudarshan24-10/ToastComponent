import React, { useCallback, useState } from 'react'
import Notification from '../components/notification';

const useNotification = (position="top-right") => {
    const [close,setClose]=useState(false);
    const [notification,setNotification]=useState(null);
    let timeout;
    const handleNotification=useCallback((props)=>{
        setClose(false);
        clearTimeout(timeout);
        setNotification(props);
        timeout=setTimeout(()=>{
            setNotification(null);
        },props.timmer)
    },[]);
    const NotificationComponent= notification && !close?(
        <div className={`${position}`}>
            <Notification notification={notification} setClose={setClose}></Notification>
        </div>
    ):null;

    return {NotificationComponent,handleNotification}
}

export default useNotification;