import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"
import Image from "next/image"
import preview from "../../../../../public/assets/images/preview.png"

const cartaz = () => {

  return(
    <Suspense fallback={<Loading />}>

      <main className={styles.container}>

        <h1>Baixar PDF do cartaz</h1>

        <a href="./cartaz.pdf" download>
          <Image src={preview} alt="Amostra do cartaz do evento" />
        </a>

      </main>

    </Suspense>
  )

}

export default cartaz