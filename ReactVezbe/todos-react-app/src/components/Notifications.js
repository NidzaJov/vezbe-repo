import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllNotifications } from '../actions/notificationsActions';
import { getAllUsers } from '../actions/userActions';

export default function Notifications() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('notifications')
        dispatch(getAllUsers())
        dispatch(getAllNotifications());
    }, [dispatch])
    const notifications = useSelector(state =>  state.notifications.notificationsList);
    const users = useSelector(state => state.users.usersList);
    const notificationElements = notifications.map((notification, idx) => {
        let user = users.find(u => u._id.toString() === notification.sender)
        return <div key={idx}><span>User {user.firstName} {user.lastName} reacted with {notification.message} to your todo</span></div>
    })

    return (
        notifications?
        <div>{
            notificationElements
        }</div>
        : <div>No notifications</div>
    )
}