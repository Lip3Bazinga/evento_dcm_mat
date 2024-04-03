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
          <div>
            <div>
              <Image src={americo} alt="Américo"/>
            </div>
            <h2>Américo Lopes</h2>
            <p>Doutor Professor de Matemática no Departamento de computação e matemática da FFCLRP - USP</p>
          </div>
          <div>
            <div>
              <Image src={tinos} alt="Américo"/>
            </div>
            <h2>Américo Lopes</h2>
            <p>Doutor Professor de Matemática no Departamento de computação e matemática da FFCLRP - USP</p>
          </div>
          <div>
            <div>
              <Image src={benito} alt="Américo"/>
            </div>
            <h2>Américo Lopes</h2>
            <p>Doutor Professor de Matemática no Departamento de computação e matemática da FFCLRP - USP</p>
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default palestrantes