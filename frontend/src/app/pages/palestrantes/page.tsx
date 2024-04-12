import Loading from "../../loading"
import { Suspense } from "react"
import americo from "@/../public/assets/images/americus.jpeg"
import tinos from "@/../public/assets/images/tinos.jpeg"
import benito from "@/../public/assets/images/benito.jpeg"
import Image from "next/image"
import styles from "./styles.module.sass"

const palestrantes = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Palestrantes</h1>

      <main className={styles.main}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentImage}>
                <Image src={americo} alt="Américo"/>
              </div>
              <div className={styles.contentInfo}>
                <h2>Américo Lopes</h2>
                <p>Doutor Professor de Matemática no Departamento de computação e matemática da FFCLRP - USP</p>
              </div>
            </div>
            <h2>Repensando as Probabilidades: fundamentos e aplicações</h2>
            <p>
            A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
modo bastante superficial no Ensino Básico.
Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
especial, a Bayesiana.
Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
chance/probabilidade bem definida de ocorrência a um determinado evento
            </p>
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default palestrantes