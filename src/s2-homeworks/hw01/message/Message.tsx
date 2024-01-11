import React from "react"
import s from "./Message.module.css"
import { MessageType } from "../HW1"

type MessagePropsType =
  {
    message: MessageType
  }

const Message =
  (
    props: MessagePropsType,
  ) => {
    const {
      message,
      id,
      user,
    } =
      props.message
    return (
      <div
        id={
          "hw1-message-" +
          props
            .message
            .id
        }
        className={
          s.message
        }
      >
        <div
          className={
            s.imageAndText
          }
        >
          <img
            id={
              "hw1-avatar-" +
              id
            }
            src={
              props
                .message
                .user
                .avatar
            }
          />
          <div
            className={
              s.text
            }
          >
            <div
              id={
                "hw1-name-" +
                id
              }
              className={
                s.name
              }
            >
              {
                user.name
              }
            </div>
            <pre
              id={
                "hw1-text-" +
                id
              }
              className={
                s.messageText
              }
            >
              {
                message.text
              }
            </pre>
          </div>
        </div>
        <div
          id={
            "hw1-time-" +
            id
          }
          className={
            s.time
          }
        >
          {
            message.time
          }
        </div>
      </div>
    )
  }

export default Message
