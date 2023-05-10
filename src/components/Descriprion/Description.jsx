import React from 'react'
import c from './Description.module.scss'

const Description = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <div className={c.text}>
          <h1>Crush of building</h1> занимается демонтажом крупных и мелких зданий.
          Примеры наших работ вы можете посмотреть ниже
        </div>
        <div className={c.service}>
          <h3>Наши услуги:</h3>
          <span>- Снос зданий целиком</span>
          <span>- Демонтаж штукатурки</span>
          <span>- Демонтаж дверей</span>
          <span>- Прорезка проёма в стене</span>
          <span>- Демонтаж деревянного пола</span>
        </div>
      </div>
    </div>
  )
}

export default Description