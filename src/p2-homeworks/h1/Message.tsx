import React,{MouseEvent} from 'react'
import './Message.css'

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {

    return (
        <div className='head-div' >
            <img src={props.avatar} className="img-avatar"/>
            <div className='div-test'>
                <h5 className='name'>{props.name}</h5>
                    <span className='message' >{props.message}</span>
                    <span className='time' >{props.time}</span>

            </div>
        </div>
    )
}

export default Message
