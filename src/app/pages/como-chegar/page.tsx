import { Suspense } from "react"
import Loading from '../../loading'
import Image from "next/image"
const images = {
  email : require("@/../public/assets/images/mail-outline.svg"),
  facebook : require("@/../public/assets/images/logo-facebook.svg"),
  instagram : require("@/../public/assets/images/logo-instagram.svg"),
  linkedin : require("@/../public/assets/images/logo-linkedin.svg"),
  tiktok : require("@/../public/assets/images/logo-tiktok.svg"),
  whatsApp : require("@/../public/assets/images/logo-whatsapp.svg"),
  telefone : require("@/../public/assets/images/call-outline.svg"),
}
import styles from "./styles.module.sass"
const comoChegar = () => {
  return(
    <Suspense fallback={<Loading />}>
      <main className={styles.container}>
      <h1>Como chegar</h1>
      <p>XXXX</p>
      <h2>Transporte Urbano</h2>
      <ul>
          <li>
            <span>
              Táxi: A empresa Coopertaxi Rp atende toda a região de Ribeirão Preto
            </span>
            <span>
              <Image src={images.telefone} alt="Telefone" />
              (16) 3323-7000 
            </span>
            <span>
              <Image src={images.whatsApp} alt="WhatsApp" />
              (16) 97401-230
            </span>
          </li>
          <li>Ônibus urbano: Incluir linhas de ônibus que chegam até o campus.</li>
          <li>
            Os ônibus circulares dentro do campus são gratuitos e facilitam o transporte e
            locomoção dentro do Campus. O serviço é oferecido de segunda a sexta-feira, das 6
            às 24 horas e, aos sábados, das 8 às 17 horas.
            Horários do circular no site da Prefeitura do Campus USP de Ribeirão Preto:
            <span>
              <a href="http://www.prefeiturarp.usp.br/" target="_blank">
                Horários
              </a>
            </span>

          </li>
        </ul>
      </main>
    </Suspense>
  )
}

export default comoChegar