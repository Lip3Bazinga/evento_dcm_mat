import { Suspense } from 'react'
import Loading from '../../loading'
import Image from 'next/image'
import styles from './styles.module.sass'
const images = {
  email : require("@/../public/assets/images/mail-outline.svg"),
  facebook : require("@/../public/assets/images/logo-facebook.svg"),
  instagram : require("@/../public/assets/images/logo-instagram.svg"),
  linkedin : require("@/../public/assets/images/logo-linkedin.svg"),
  tiktok : require("@/../public/assets/images/logo-tiktok.svg"),
  whatsApp : require("@/../public/assets/images/logo-whatsapp.svg"),
  telefone : require("@/../public/assets/images/call-outline.svg"),
}

const faleConosco = () => {
  return(
    <Suspense fallback={<Loading />}>
      
      <div className={styles.container}>

        <main>
          <h1>Fale conosco</h1>
          <div>
            <h2>Entre em contato</h2>
            <p><span>Email:</span>evento_fpmat@usp.br</p>
          </div>
          <div>
            <h2>Mais dúvidas?</h2>
            <p><span>Telefone:</span>(16) 3315-0566</p>
          </div>
        </main>
      </div>

    </Suspense>
  )
}

export default faleConosco