'use client'
import { ReactElement, Suspense, useEffect, useState } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"
import Modal from "@/components/UI/modal";



const cronograma = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<number>(0);
  const [modalChildren, setModalChildren] = useState<ReactElement>(<></>);
  console.log(isOpen)

  useEffect(() => {
    switch(selectedWorkshop){
      case 0:
        break;
      
      case 1:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Matemática Recreativa e Visualização <br/> geométrica na sala de aula</h1>
            <h2>Instituição: USP - IME - CAEM</h2>
            <h2>Membros: Ana Paula Jahn</h2>
            <p>Resumo:</p>
          </div>
        )
        break;

      case 2:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: USP - IME</h2>
            <h2>Membros: Cristina Cerri</h2>
            <p>Resumo:</p>
          </div>
        )
        break;
      
      case 3:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Repensando as Probabilidades: fundamentos e aplicações</h1>
            <h2>Instituição: ETAPA</h2>
            <h2>Membros: Edmilson Mota</h2>
            <p>Resumo: A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de modo bastante superficial no Ensino Básico.
Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em especial, a Bayesiana.
Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma chance/probabilidade bem definida de ocorrência a um determinado evento.</p>
          </div>
        )
        break;

      case 4:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Modelagem probabilística na sala de aula</h1>
            <h2>Instituição: UNICAMP</h2>
            <h2>Membros: Laura Rifo</h2>
            <p>Resumo: Esta oficina faz parte de um estudo observacional sobre o ensino de probabilidade e pensamento inferencial através de problemas de modelagem matemática na formação inicial e continuada de professores de matemática. O marco teórico da pesquisa está centrado no Conhecimento Especializado do Professor de Matemática (MTSK) e na Modelagem Matemática para o ensino.
<br/><br/>Referências bibliográficas:
1. Borovcnik, M. y Kapadia, R. (2011). Modelling in probability and statistics, key ideas and innovative examples. En J. Maasz y J. O’Donoghue (Eds.), Real-World Problems for Secondary School Mathematics Students: Case Studies (pp. 1-43).
2. Borromeo Ferri, R. (2018) Learning How to Teach Mathematical Modeling in School and Teacher Education. Springer.
3. Castilla-Mora, L., Rifo, L., y Climent, N. (2021). Conocimiento de futuros profesores sobre incertidumbre. En P. Diago, D. F. Yáñez, M. T. González-Astudillo y D. Carrillo (Eds.), Investigación en Educación Matemática XXIV (pp. 189-96). Valencia: SEIEM.
4. Rifo, L. (2020) Probabilidade e estatística: aspectos da tomada de decisões e incerteza para o Ensino Fundamental e Médio. SBM.</p>
          </div>
        )
        break;
      
      case 5:
        break;

      case 6:
        break;
      
      case 7:
        break;

      case 8:
        break;
      
      case 9:
        break;

      case 10:
        break;
      
      case 11:
        break;

      case 12:
        break;
      
      case 13:
        break;

      case 14:
        break;
      
      case 15:
        break;

      case 16:
        break;

    }

  }, [selectedWorkshop]);


  return(
    <Suspense fallback={<Loading />}>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} children={modalChildren}/>
      <div className={styles.container}>
        <section>
          <h1>Cronograma</h1>

          <div>
            <section>
              <h2>Mesa Redonda: </h2>
              <div>
                <section style={{cursor: "default"}}>
                  <h2>título</h2>
                  <p>membros:</p>
                </section>
                
              </div>
            </section>

            <section>
              <h2>Palestras: </h2>
              <div>
                <section style={{cursor: "default"}}>
                  <h2>título</h2>
                  <p>membros:</p>
                </section>

                <section style={{cursor: "default"}}>
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
                  <div className={styles.card} style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
                    <section onClick={() => {setSelectedWorkshop(1); setIsOpen(true)}}>
                      <h2>Matemática Recreativa e Visualização geométrica <br/> na sala de aula 1</h2>
                      <p>Membros: Ana Paula Jahn</p>
                    </section>
                    <section onClick={() => {setSelectedWorkshop(2); setIsOpen(true)}}>
                      <h2>Oficina 2</h2>
                      <p>Membros: Cristina Cerri</p>
                    </section>
                    <section onClick={() => {setSelectedWorkshop(3); setIsOpen(true)}}>
                      <h2>Repensando as Probabilidades: fundamentos e aplicações</h2>
                      <p>Membros: Edmilson Mota</p>
                    </section>
                    <section onClick={() => {setSelectedWorkshop(4); setIsOpen(true)}}>
                      <h2>Modelagem probabilística na sala de aula</h2>
                      <p>Membros: Laura Rifo</p>
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
                  <div className={styles.card} style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
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