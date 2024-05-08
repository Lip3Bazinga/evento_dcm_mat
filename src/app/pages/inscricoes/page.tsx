'use client'

import { Suspense } from "react"
import Loading from "../../loading"
import styles from './styles.module.sass'

const GoogleForm = () => {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSercQzi1Q8n8vCvmKeg0gftg_PGP5U0ukotPiJjp1VU-gPtpw/viewform?embedded=true"
      width={640}
      height={2433}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>

  );
};


const Inscricoes = () => {

  return(
    <Suspense fallback={<Loading />}>
      <main className={styles.main}>
        <GoogleForm />
      </main>
    </Suspense>
  )
}

export default Inscricoes
