'use client'
import Loading from "../../../loading"
import styles from "./styles.module.sass"
import { Suspense } from "react"

const programacao = () => {

  return(
    <Suspense fallback={<Loading />}>
      
      <div className={styles.container}>
      <p>
      A programação do evento será curta, mas intensa e contará com palestras, oficinas e uma mesa redonda e uma atividade cultural. Segue abaixo os horários das atividades:
      </p>
      <h1 style={{margin: "5rem"}}>Horários</h1>

        <table>
          <tr>
            <th>Horários</th>
            <th>Sexta-feira 26 de julho</th>
            <th>Horários</th>
            <th>Sábado 27 de julho</th>
          </tr>
          <tr>
            <td> </td>
            <td>Abertura <br/> Local:</td>
            <td>08:00h às 10:00h</td>
            <td>Oficinas G1 <br/> Local:</td>            
          </tr>
          <tr>
            <td>10:00h às 11:00h</td>
            <td>Palestra 1: Título <br/> Palestrante: <br/> Local:</td>
            <td>10:00h às 10:30h</td>
            <td>Pôsteres <br/> Local: </td>
          </tr>
          <tr>
            <td>11:30h às 12:30h</td>
            <td>Palestra 2: Título <br/> Palestrante: <br/> Local:</td>
            <td>10:30h às 12:30h</td>
            <td>Oficinas G2 <br/> Local:</td>            
          </tr>
          <tr>
            <td>14:30h às 16:00h</td>
            <td>Oficinas G1 <br/> Local:</td>            
            <td>14:30h às 16:30h</td>
            <td>Mesa Redonda <br/> Local:</td>            
          </tr>
          <tr>
            <td>16:00h às 16:30h</td>
            <td>Pôsteres / Coffee Break <br/> Local: </td>
            <td></td>
            <td>Encerramento <br/> Local: </td>
          </tr>
          <tr>
            <td>16:30h às 18:30h</td>
            <td>Oficinas G2 <br/> Local:</td>            
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>19:00h</td>
            <td>Apresentação Musical</td>
            <td></td>
            <td></td>         
          </tr>
        </table>
      </div>
    </Suspense>
  )
}

export default programacao