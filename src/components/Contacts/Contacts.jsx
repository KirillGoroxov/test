import React, { useState } from 'react'
import c from './Contacts.module.scss'
const Contacts = () => {
  // создание flux архитектуры
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  return (
    <form className={c.form}>
      <div className={c.text}>Заполните форму и мы с вами свяжемся</div>
      <div className={c.info}>Имя</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div className={c.info}>Телефон</div>
      <input type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <div className={c.info}>Почта</div>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button>Отправить</button>
    </form>
  )
}

export default Contacts