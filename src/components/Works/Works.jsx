import React, { useState } from 'react'
import c from './Works.module.scss'
import cn from 'classnames'
const Works = () => {
  // Класс для контейнера с фото, который в дальнейшим будем изменять для анимации
  const [photo, setPhoto] = useState(c.photo)
  // Индекс центрального фото
  const [index, setIndex] = useState(1)
  // Индекс фото слева
  const [prevIndex, setPrevIndex] = useState(4)
  // Индекс фото справа
  const [nextIndex, setNextIndex] = useState(2)
  // Функция для перехода к предыдушей фотографии
  const prev = () => {
    // добавляем класс с помощью библиотеки 'classnames'
    setPhoto(cn(c.photo, c.activePrev))
    // Используем функцию задержки для своевременного изменения индексов
    setTimeout(() => {
      // присваиваем контейнеру с фотографиями первоначальный класс
      setPhoto(c.photo)
      // Если индекс = 1
      if (index === 1) {
        setIndex(4)
        setPrevIndex(3)
        setNextIndex(1)
      }
      else {
        // Если индекс фото слева = 1 присваиваем ему индекс последнего фото
        if (prevIndex === 1) setPrevIndex(4)
        // В противном случае просто понижаем индекс на 1
        else setPrevIndex(prevIndex - 1)
        // Если индекс фото справа = 1 присваиваем индекс последнего фото
        if (nextIndex === 1) setNextIndex(4)
        // В противном случае понижаем индекс на 1
        else setNextIndex(nextIndex - 1)
        // Если индекс центрального фото != 1 отнимаем 1 от предыдущего индекса
        setIndex(index - 1)
      }
      // выставляем задержку 700мс, так как это время анимаци
    }, 700)
  }
  const next = () => {
    // Добавляем класс для создания анимации
    setPhoto(cn(c.photo, c.activeNext))
    setTimeout(() => {
      // Присваиваем первоначальный класс
      setPhoto(c.photo)
      // Если индекс = индексу последнего фото
      if (index === 4) {
        setIndex(1)
        setPrevIndex(4)
        setNextIndex(2)
      }
      else {
        // Если индекс фото слева = индексу последнего фото присваиваем ему 1
        if (prevIndex === 4) setPrevIndex(1)
        // в противном случае просто прибавляем на 1
        else setPrevIndex(prevIndex + 1)
        // Если индекс фото справа = индексу последнего фото присваиваем 1
        if (nextIndex === 4) setNextIndex(1)
        // В противном случае добавляем 1
        else setNextIndex(nextIndex + 1)
        // Добавляем к индексу центрального фото 1
        setIndex(index + 1)
      }
    }, 700)
  }
  return (
    <div className={c.wrapper}>
      <div className={c.prev} onClick={prev}>
        <img src="./../../../images/arrow.svg" alt="" />
      </div>
      <div className={c.photoCont}>
        <div className={photo}>
          <img src={`./../../../images/${prevIndex}.jpg`} alt="" />
          <img src={`./../../../images/${index}.jpg`} alt="" />
          <img src={`./../../../images/${nextIndex}.jpg`} alt="" />
        </div>
      </div>
      <div className={c.next} onClick={next}>
        <img src="./../../../images/arrow.svg" alt="" />
      </div>
    </div>
  )
}

export default Works