import React from 'react'
import c from './Comment.module.scss'
const Comment = (props) => {
  return (
    <div className={c.comment}>
      <img src="./../../../../images/avatar.svg" alt="" />
      <div className={c.name}>{props.name}</div>
      <div className={c.text}>{props.text}</div>
    </div>
  )
}

export default Comment