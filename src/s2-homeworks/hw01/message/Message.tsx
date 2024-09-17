import React from 'react'
import s from './Message.module.css'
import {MessageType, MessageUserType, UserType} from "../HW1";

// нужно создать правильный тип вместо any
type MessagePropsType = {
    message: MessageType
}
// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const {message, id, user} = props.message
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + id} className={s.name}>
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.text}
                        {/*Hello, she didn’t do anything and rested all day, how are you?*/}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + id} className={s.time}>
                {/*создаёт студент*/}
                {message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
