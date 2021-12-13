import { useDispatch, useSelector } from 'react-redux';
import { useEffect, } from 'react';
import { allNotificationRead, getAllNotifications } from '../actions/notificationsActions';
import { getAllUsers } from '../actions/userActions';
import { parseISO, formatDistanceToNow } from 'date-fns';
import classnames from 'classnames';

export default function Notifications() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllNotifications());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(allNotificationRead());
        }
    }, [])


    const notifications = useSelector(state =>  state.notifications.notificationsList);
    const users = useSelector(state => state.users.usersList);
    const numUnreadNotifications = notifications.filter(n => !n.read).length;
    let unreadNotificationsBadge
    if (numUnreadNotifications > 0) {
        unreadNotificationsBadge = (
            <span className="badge">{numUnreadNotifications}</span>
        )
    }

    const notificationElements = notifications.map((notification, idx) => {
        let user = users.find(u => u._id.toString() === notification.sender) || { firstName: 'Unknown', lastname: 'user'}
        const date = parseISO(notification.date);
        const timeAgo = formatDistanceToNow(date);
        const notificationClassName = classnames('notification', { new: !notification.read })

        return <div key={idx} className={notificationClassName}>
                <div>User <b>{user.firstName} {user.lastName}</b> reacted with {notification.message} to your todo</div>
                <div title={notification.date}>
                    <i>{timeAgo} ago</i>
                </div>
            </div>
    })


    return (
        notifications?
        <div>
            <div>Notifications: {unreadNotificationsBadge}</div>
            {
            notificationElements
        }
            </div>
        : <div>No notifications</div>
    )
}