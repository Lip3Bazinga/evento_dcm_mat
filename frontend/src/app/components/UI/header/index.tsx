import Link from 'next/link'
import styles from './styles.module.sass'

const header = () => {
  return(
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="">Home</Link></li>
          <li><Link href="">O evento</Link></li>
          <li><Link href="">Palestrantes</Link></li>
          <li><Link href="">Pôsteres</Link></li>
          <li><Link href="">Inscrições</Link></li>
          <li><Link href="">Local</Link></li>
          <li><Link href="">Como chegar</Link></li>
          <li><Link href="">Hospedagem</Link></li>
          <li><Link href="">Fale com a gente</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header