'use client'

import { Suspense } from "react"
import Loading from "../../loading"
import styles from './styles.module.sass'

const Inscricoes = () => {

  return(
    <Suspense fallback={<Loading />}>
      <main className={styles.main}>
        <h1>Inscrições</h1>
        <p>Para garantir a sua vaga no evento, não perca tempo e se inscreva acessando o nosso formulário online!</p>
        <a href="https://forms.gle/1mjvjYsvx7PXAKKY8" target="_blank">
          Faça sua inscrição
        </a>
      </main>
    </Suspense>
  )
}

export default Inscricoes
