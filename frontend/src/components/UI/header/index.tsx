'use client'

import Link from 'next/link'
import styles from './styles.module.sass'
import { useState } from 'react'
import open_menu_icon from '@/../public/assets/images/menu-outline.svg'
import close_menu_icon from '@/../public/assets/images/close-outline.svg'
import Image from 'next/image'

const header = () => {

  const [isOpenLink, setIsOpenLink] = useState(true)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isSelectedLink, setIsSelectedLink] = useState(true)

  return(
    <header className={styles.header}>
      <nav>
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {
            isOpenMenu
            ? <Image src={close_menu_icon} alt='Ícone para fechar menu'/>
            : <Image src={open_menu_icon} alt='Ícone para abrir menu'/>
          }
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
                    <Link href="/pages/evento/cronograma">Cronograma</Link>
                    <Link href="/pages/evento/cartaz">Cartaz</Link>
                  </div>
                </div>
                </>
              )
            }
          </li>
          <li><Link href="/pages/palestrantes" className={styles.link}>Palestrantes</Link></li>
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

export default header