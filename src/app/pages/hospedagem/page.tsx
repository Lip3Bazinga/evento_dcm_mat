import { Suspense } from "react"
import Loading from '../../loading'
import styles from "./styles.module.sass"

const hospedagem = () => {
  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1>Hospedagem</h1>
        <p>XXXX</p>
        <h2></h2>
        <ul>
            <li>
              <span>
                Pousada Santa Rita
              </span>
              <span>
                (16) 3323-7000 
              </span>
              <span>
                (16) 97401-230
              </span>
            </li>
            <li>
              <span>
                Hotel Dan Inn
              </span>
              Ônibus urbano: Incluir linhas de ônibus que chegam até o campus.
            </li>
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
      </div>
    </Suspense>
  )
}

export default hospedagem