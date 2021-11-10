import styles from './Messages.module.scss';
import classNames from 'classnames';

console.log('Styles are', styles);

export function Messages(props) {
    
    return props.messages.map(
        (msg, idx) => {
            const messagesClasses = classNames(
                'my-padding',
                {
                    [styles.primary]: !msg.isWarning,
                    [styles.warning]: msg.isWarning
                }
            );
            return (
                <div key={`message-${idx}`} className={messagesClasses}>
                    {msg.text}
                </div>
            )
        } 
    )
}