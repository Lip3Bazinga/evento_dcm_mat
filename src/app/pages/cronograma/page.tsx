"use client"
import Loading from "../../loading"
import styles from "./styles.module.sass"
import Modal from "@/components/UI/modal";
import { ReactElement, Suspense, useEffect, useState } from "react"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cronograma = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<number>(0);
  const [modalChildren, setModalChildren] = useState<ReactElement>(<></>);

  useEffect(() => {
    switch(selectedWorkshop){
      case 0:
        break;
      
      case 1:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Matemática Recreativa e Visualização <br/> geométrica na sala de aula</h1>
            <h2>Instituição: USP - IME - CAEM</h2>
            <h2> Ana Paula Jahn</h2>
            <p>Resumo:</p>
          </div>
        )
        break;

      case 2:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: USP - IME</h2>
            <h2> Cristina Cerri</h2>
            <p>Resumo:</p>
          </div>
        )
        break;
      
      case 3:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Repensando as Probabilidades: fundamentos e aplicações</h1>
            <h2>Instituição: ETAPA</h2>
            <h2> Edmilson Mota</h2>
            <p>Resumo: A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
            extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de modo
            bastante superficial no Ensino Básico.
            Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os problemas
            da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em especial, a Bayesiana.
            Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma chance/probabilidade
            bem definida de ocorrência a um determinado evento.</p>
          </div>
        )
        break;

      case 4:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Modelagem probabilística na sala de aula</h1>
            <h2>Instituição: UNICAMP</h2>
            <h2> Laura Rifo</h2>
            <p>Resumo: Esta oficina faz parte de um estudo observacional sobre o ensino de probabilidade e 
            pensamento inferencial através de problemas de modelagem matemática na formação inicial e continuada
            de professores de matemática. O marco teórico da pesquisa está centrado no Conhecimento Especializado
            do Professor de Matemática (MTSK) e na Modelagem Matemática para o ensino.
            <br/><br/>Referências bibliográficas:
            1. Borovcnik, M. y Kapadia, R. (2011). Modelling in probability and statistics, key ideas and innovative 
            examples. En J. Maasz y J. O’Donoghue (Eds.), Real-World Problems for Secondary School Mathematics Students:
             Case Studies (pp. 1-43).
            2. Borromeo Ferri, R. (2018) Learning How to Teach Mathematical Modeling in School and Teacher Education. Springer.
            3. Castilla-Mora, L., Rifo, L., y Climent, N. (2021). Conocimiento de futuros profesores sobre incertidumbre. En P.
            Diago, D. F. Yáñez, M. T. González-Astudillo y D. Carrillo (Eds.), Investigación en Educación Matemática XXIV (pp. 189-96). Valencia: SEIEM.
            4. Rifo, L. (2020) Probabilidade e estatística: aspectos da tomada de decisões e incerteza para o Ensino Fundamental e Médio. SBM.</p>
          </div>
        )
        break;
      
      case 5:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Pulo de Vieta</h1>
            <h2>Instituição: UFG</h2>
            <h2> Ana Paula Chaves</h2>
            <p>Resumo: O Pulo de Vieta (também conhecido em inglês como “Vieta Jumping" ou “Root Flipping"), 
            é uma técnica para resolução de alguns tipos de problemas de Teoria dos Números. A mesma consiste
            em, basicamente, partir das soluções (ou raízes) de um determinado polinômio, e “pular" para uma 
            outra solução. Isso pode ser feito principalmente através das relações de soma e produto entre as 
            raízes, mas dependendo do grau podem ser necessárias as demais relações de Girard. Qual a utilizade 
            de aplicar esse método? Dependendo do problema, podemos mostrar que, por exemplo, todas as soluções 
            respeitam uma determinada propriedade, e com isso conseguir colecionar todas elas, ou que não existem
            soluções para uma determinada equação Diofantina (uma descida infinita de Fermat). Nesta oficina, vamos
             exibir um problema histórico da Olimpíada Internacional de Matemática, que foi a gênese desse método,
              e a sua bela solução.</p>
          </div>
        )
        break;

      case 6:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1>Construção de itens para avaliação em larga escala e análise de resultados de desempenho.</h1>
            <h2>Instituição: UnB</h2>
            <h2> Mauro Rabelo</h2>
            <p>Resumo:</p>
          </div>
        )
        break;
      
      case 7:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: UEPB</h2>
            <h2> Gustavo Araujo</h2>
            <p>Resumo:</p>
          </div>
        )
        break;

      case 8:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: UFSM</h2>
            <h2> Carmen Mathias</h2>
            <p>Resumo:</p>
          </div>
        )
        break;
      
      case 9:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: USP - IME</h2>
            <h2> Sergio Alves</h2>
            <p>Resumo:</p>
          </div>
        )
        break;

      case 10:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição: USP - IME</h2>
            <h2> Ana Catarina Pontone Hellmeister</h2>
            <p>Resumo:</p>
          </div>
        )
        break;
      
      case 11:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição:</h2>
            <h2></h2>
            <p>Resumo:</p>
          </div>
        )
        break;

      case 12:
        setModalChildren(
          <div className={styles.modalChildren}>
            <h1></h1>
            <h2>Instituição:</h2>
            <h2></h2>
            <p>Resumo:</p>
          </div>
        )
        break;
    }

  });

  return(
    <Suspense fallback={<Loading />}>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} children={modalChildren}/>
        <div className={styles.container}>

          <section>
            <h1>Cronograma</h1>
            <p>As oficinas serão oferecidas aos professores do Ensino Básico, em salas com turmas reduzidas, e acontecerão simultaneamente. <br/> Pretende-se que sejam oferecidas diversas oficinas e que estas possam ser replicadas nesses dois dias, para que mais professores possam participar e ter acesso a abordagens inovadoras, <br/> materiais didáticos atualizados e métodos de ensino eficazes, contribuindo assim para a melhoria do ensino de matemática e o sucesso dos alunos.</p>

            <div>
              <section>
                <h2>Mesa Redonda: </h2>
                <div>
                  <section style={{cursor: "default"}}>
                    <h2>título</h2>
                    <p></p>
                  </section>
                  
                </div>
              </section>

              <section>
                <h2>Palestras: </h2>
                <div>
                  <section style={{cursor: "default"}}>
                    <h2>título</h2>
                    <p></p>
                  </section>

                  <section style={{cursor: "default"}}>
                    <h2>Reflexões sobre a História da Matemática no Processo Pedagógico</h2>
                    <p>Sérgio Nobre</p>
                  </section>
                  
                </div>
              </section>

            </div>

            <div>
              <section>
                <h2 style={{marginBottom: "4rem"}}>Oficinas: </h2>
                <div style={{width: "auto"}}>
                  <div style={{flexDirection: "column", marginRight: "3rem"}}>
                    <h2 style={{fontSize: "3rem"}}></h2>
                    <div className={styles.card} style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
                      <section onClick={() => {setSelectedWorkshop(1); setIsOpen(true)}}>
                        <h2>Matemática Recreativa e Visualização geométrica na sala de aula 1</h2>
                        <p> Ana Paula Jahn</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(2); setIsOpen(true)}}>
                        <h2>Oficina 2</h2>
                        <p> Cristina Cerri</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(3); setIsOpen(true)}}>
                        <h2>Repensando as Probabilidades: fundamentos e aplicações</h2>
                        <p> Edmilson Mota</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(4); setIsOpen(true)}}>
                        <h2>Modelagem probabilística na sala de aula</h2>
                        <p> Laura Rifo</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(5); setIsOpen(true)}}>
                        <h2>Pulo de Vieta</h2>
                        <p> Ana Paula Chaves</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(6); setIsOpen(true)}}>
                        <h2>Construção de itens para avaliação em larga escala e análise de resultados de desempenho.</h2>
                        <p> Mauro Rabelo</p>
                      </section>
                      
                    </div>
                  </div>
                  <div style={{flexDirection: "column", marginLeft: "3rem"}}>
                    <h2 style={{fontSize: "3rem"}}></h2>
                    <div className={styles.card} style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "auto"}}>
                    <section onClick={() => {setSelectedWorkshop(7); setIsOpen(true)}}>
                        <h2>Oficina 7</h2>
                        <p> Gustavo Araujo</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(8); setIsOpen(true)}}>
                        <h2>Oficina 8</h2>
                        <p> Carmen Mathias</p>
                    </section>
                    <section onClick={() => {setSelectedWorkshop(9); setIsOpen(true)}}>
                        <h2>Oficina 9</h2>
                        <p> Sergio Alves</p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(10); setIsOpen(true)}}>
                        <h2>Oficina 10</h2>
                        <p> Ana Catarina Pontone Hellmeister </p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(11); setIsOpen(true)}}>
                        <h2>Oficina 11</h2>
                        <p></p>
                      </section>
                      <section onClick={() => {setSelectedWorkshop(12); setIsOpen(true)}}>
                        <h2>Oficina 12</h2>
                        <p></p>
                      </section>
                    </div>
                  </div>                
                </div>
              </section>
            </div>
            <p>Observação: Na sua inscrição, favor indicar até 4 oficinas de sue interesse, segundo a ordem descrita acima. <br/> Tentaremos, na medida do possível e por ordem de inscrição, garantir sua vaga na oficina, em um dos quatro horários.</p>
          </section>
        </div>
    </Suspense>
  )
}

export default Cronograma