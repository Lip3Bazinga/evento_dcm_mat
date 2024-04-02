import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"

const cronograma = () => {
  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1>Cronograma</h1>

        <h2>Segunda-Feira</h2>
        <p>08:00 às 10:00  -  Palestra sobre Matemática</p>
        <p>10:00 às 12:00  -  Mesa Redonda: Cálculo Aplicado</p>
        <p>14:00 às 16:00  -  Palestra sobre Matemática Aplicada</p>
        <p>16:00 às 18:00  -  Coffee Break</p>

        <h2>Terça-Feira</h2>
        <p>08:00 às 10:00  -  Palestra sobre Matemática</p>
        <p>10:00 às 12:00  -  Mesa Redonda: Cálculo Aplicado</p>
        <p>14:00 às 16:00  -  Palestra sobre Matemática Aplicada</p>
        <p>16:00 às 18:00  -  Coffee Break</p>

        <h2>Quarta-Feira</h2>
        <p>08:00 às 10:00  -  Palestra sobre Matemática</p>
        <p>10:00 às 12:00  -  Mesa Redonda: Cálculo Aplicado</p>
        <p>14:00 às 16:00  -  Palestra sobre Matemática Aplicada</p>
        <p>16:00 às 18:00  -  Coffee Break</p>

        <h2>Quinta-Feira</h2>
        <p>08:00 às 10:00  -  Palestra sobre Matemática</p>
        <p>10:00 às 12:00  -  Mesa Redonda: Cálculo Aplicado</p>
        <p>14:00 às 16:00  -  Palestra sobre Matemática Aplicada</p>
        <p>16:00 às 18:00  -  Coffee Break</p>

        <h2>Sexta-Feira</h2>
        <p>08:00 às 10:00  -  Palestra sobre Matemática</p>
        <p>10:00 às 12:00  -  Mesa Redonda: Cálculo Aplicado</p>
        <p>14:00 às 16:00  -  Palestra sobre Matemática Aplicada</p>
        <p>16:00 às 18:00  -  Coffee Break</p>

      </div>
    </Suspense>
  )
}

export default cronograma