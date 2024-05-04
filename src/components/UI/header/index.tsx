'use client'

import Link from 'next/link'
import styles from './styles.module.sass'
import { useState, useEffect } from 'react'
import open_menu_icon from '@/../public/assets/images/menu-outline.svg'
import close_menu_icon from '@/../public/assets/images/close-outline.svg'
import Image from 'next/image'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpenLink, setIsOpenLink] = useState(true)
  const [isSelectedLink, setIsSelectedLink] = useState(true)

  useEffect(() => {
    // Adiciona um event listener para o evento de rolagem quando o componente monta
    window.addEventListener('scroll', handleScroll)
    // Remove o event listener quando o componente desmonta para evitar vazamentos de memória
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrolled = window.scrollY > 0
    setIsScrolled(scrolled)
  }

  const headerClassName = isScrolled ? `${styles.header} ${styles.header_scroll}` : styles.header

  return (
    <header className={headerClassName}>
      <nav>
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Image src={isOpenMenu ? close_menu_icon : open_menu_icon} alt='Ícone para alternar menu' />
        </button>
        <ul className={isOpenMenu ? styles.active : ''}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li onClick={() => setIsOpenLink(!isOpenLink)}>
            {isOpenLink ? 
              (
                <Link href="#"  className={styles.link}>O evento</Link>
              )
            : 
              (
                <>
                <Link href="#" className={styles.link}>O evento</Link>
                <div>
                  <div>
                    <Link href="/pages/evento/comite">Comitê</Link>
                    <Link href="/pages/evento/programacao">Programação</Link>
                    <Link href="/pages/evento/cartaz">Cartaz</Link>
                  </div>
                </div>
                </>
              )
            }
          </li>
          <li><Link href="/pages/cronograma" className={styles.link}>Cronograma</Link></li>
          <li><Link href="/pages/posteres" className={styles.link}>Pôsteres</Link></li>
          <li><Link href="/pages/inscricoes" className={styles.link}>Inscrições</Link></li>
          <li><Link href="/pages/local" className={styles.link}>Local</Link></li>
          <li><Link href="/pages/como-chegar" className={styles.link}>Como chegar</Link></li>
          <li><Link href="/pages/hospedagem" className={styles.link}>Hospedagem</Link></li>
          <li><Link href="/pages/fale-conosco" className={styles.link}>Fale com a gente</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
