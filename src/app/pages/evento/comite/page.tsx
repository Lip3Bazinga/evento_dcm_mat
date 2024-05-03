import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"

const comite = () => {

  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.container}>
      <ul>
        <h2 className={styles.title}>Comitê científico</h2>
        <li>Claudia Lisete Oliveira Groenwald</li>
        <li>Jaqueline Godoy Mesquita</li>
        <li>Marcela Luciano Vilela de Souza</li>
      </ul>
      <ul>
        <h2 className={styles.title}>Comissão organizadora</h2>
        <li>Américo López Gálvez</li>
        <li>Cristina Cerri</li>
        <li>Geraldine Goes Bosco</li>
        <li>Katia A. Gonçalves de Azevedo</li>
        <li>Marta Cilene Gadotti</li>
        <li>Michelle Fernanda Pierri Hernandez</li>
        <li>Vanessa Rolnik Artioli</li>
      </ul>
      </main>

     
    </Suspense>
  )
}

export default comite