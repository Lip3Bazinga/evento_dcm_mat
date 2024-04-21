import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"

const cronograma = () => {
  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <section>
          <h1>Cronograma</h1>

          <div>
            <section>
              <h2>Mesa Redonda: </h2>
              <div>
                <section>
                  <h2>título</h2>
                  <p>membros:</p>
                </section>
                
              </div>
            </section>

            <section>
              <h2>Palestras: </h2>
              <div>
                <section>
                  <h2>título</h2>
                  <p>membros:</p>
                </section>

                <section>
                  <h2>título</h2>
                  <p>membros:</p>
                </section>
                
              </div>
            </section>

          </div>

          <div>
            <section>
              <h2 style={{marginBottom: "4rem"}}>Oficinas: </h2>
              <div style={{width: "auto"}}>
                <div style={{flexDirection: "column", marginRight: "3rem"}}>
                  <h2 style={{fontSize: "3rem"}}>Grupo 1</h2>
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
                    <section>
                      <h2>Oficina 1</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 2</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 3</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 4</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 5</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 6</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 7</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 8</h2>
                      <p>Membros:</p>
                    </section>
                  </div>
                </div>
                <div style={{flexDirection: "column", marginLeft: "3rem"}}>
                  <h2 style={{fontSize: "3rem"}}>Grupo 2</h2>
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
                    <section>
                      <h2>Oficina 9</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 10</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 11</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 12</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 13</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 14</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 15</h2>
                      <p>Membros:</p>
                    </section>
                    <section>
                      <h2>Oficina 16</h2>
                      <p>Membros:</p>
                    </section>
                  </div>
                </div>                
              </div>
            </section>
          </div>

        <span></span>
        
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
        </section>
      </div>
    </Suspense>
  )
}

export default cronograma