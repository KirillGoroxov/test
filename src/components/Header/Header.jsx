import React from 'react'
import c from './Header.module.scss'

const Header = () => {
  // Функция для перехода к описанию компании
  const about = () => {
    if (window.innerWidth < 1024) {
      window.scrollTo({
        top: 130,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 600) {
      window.scrollTo({
        top: 230,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth > 1024) {
      window.scrollTo({
        top: 180,
        behavior: 'smooth'
      })
    }
  }
  // Функция для перехода к примерам работ 
  const works = () => {
    if (window.innerWidth > 1024) {
      window.scrollTo({
        top: 556,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 1024) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 735) {
      window.scrollTo({
        top: 465,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 600) {
      window.scrollTo({
        top: 564,
        behavior: 'smooth'
      })
    }
  }
  // Функция для перехода к отзывам клиентов
  const reviews = () => {
    if (window.innerWidth > 1024) {
      window.scrollTo({
        top: 1306,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 1410) {
      window.scrollTo({
        top: 1206,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 1175) {
      window.scrollTo({
        top: 1056,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 1024) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 940) {
      window.scrollTo({
        top: 970,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 768) {
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 740) {
      window.scrollTo({
        top: 864,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 588) {
      window.scrollTo({
        top: 914,
        behavior: 'smooth'
      })
    }
    if (window.innerWidth < 468) {
      window.scrollTo({
        top: 794,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className={c.wrapper}>
      <div className={c.logo}>
        <img src='./../../../images/logo.svg' alt="" />
        <div className={c.title}>COB</div>
      </div>
      <div className={c.navbar}>
        <span onClick={about}>О нас</span>
        <span onClick={works}>Наши работы</span>
        <span onClick={reviews}>Отзывы клиентов</span>
      </div>
    </div>
  )
}

export default Header