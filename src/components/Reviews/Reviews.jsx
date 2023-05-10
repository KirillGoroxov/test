import React from 'react'
import c from './Reviews.module.scss'
import Comment from './Comment/Comment'
const Reviews = () => {
  // Массив для с информацией о клиентах и их отзывах
  const clients = [
    { id: 1, name: 'Александр', text: 'Выполнили работу качественно, уложились в заранее оговоренный срок' },
    { id: 2, name: 'Михаил', text: 'Все сделали быстро, убрали весь мусор после сноса здания' },
    { id: 3, name: 'Вячеслав', text: 'Аккуратно вырезали дверной проём, качество выполненной работы полностью устраивает' }
  ]
  return (
    <div className={c.wrapper}>
      <div className={c.title}>Отзывы наших клиентов:</div>
      <div className={c.clients}>
        {/*Использование функции 'map' для отрисовки компоненты отзыва*/}
        {clients.map(c => <Comment key={c.id} name={c.name} text={c.text} />)}
      </div>
    </div>
  )
}

export default Reviews