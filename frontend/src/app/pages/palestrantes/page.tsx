import Loading from "../../loading"
import React, { Suspense } from "react"
import americo from "@/../public/assets/images/americus.jpeg"
import tinos from "@/../public/assets/images/tinos.jpeg"
import benito from "@/../public/assets/images/benito.jpeg"
import Image from "next/image"
import styles from "./styles.module.sass"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const palestrantesData = [
  {
    nome: "Edmilson Mota",
    instituicao: "ETAPA",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Repensando as Probabilidades: fundamentos e aplicações",
    descricao:
      `A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
      extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
      modo bastante superficial no Ensino Básico.
      Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
      problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
      especial, a Bayesiana.
      Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
      chance/probabilidade bem definida de ocorrência a um determinado evento`
  },
  {
    nome: "Laura Rifo",
    instituicao: "UNICAMP",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Modelagem probabilística na sala de aula",
    descricao:
      `Esta oficina faz parte de um estudo observacional sobre o ensino de probabilidade e
      pensamento inferencial através de problemas de modelagem matemática na formação inicial e
      continuada de professores de matemática. O marco teórico da pesquisa está centrado no
      Conhecimento Especializado do Professor de Matemática (MTSK) e na Modelagem
      Matemática para o ensino.`,
  },
  {
    nome: "Edmilson Mota",
    instituicao: "ETAPA",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Repensando as Probabilidades: fundamentos e aplicações",
    descricao:
      `A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
      extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
      modo bastante superficial no Ensino Básico.
      Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
      problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
      especial, a Bayesiana.
      Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
      chance/probabilidade bem definida de ocorrência a um determinado evento`
  },
  {
    nome: "Laura Rifo",
    instituicao: "UNICAMP",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Modelagem probabilística na sala de aula",
    descricao:
      `Esta oficina faz parte de um estudo observacional sobre o ensino de probabilidade e
      pensamento inferencial através de problemas de modelagem matemática na formação inicial e
      continuada de professores de matemática. O marco teórico da pesquisa está centrado no
      Conhecimento Especializado do Professor de Matemática (MTSK) e na Modelagem
      Matemática para o ensino.`,
  },
  {
    nome: "Edmilson Mota",
    instituicao: "ETAPA",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Repensando as Probabilidades: fundamentos e aplicações",
    descricao:
      `A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
      extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
      modo bastante superficial no Ensino Básico.
      Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
      problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
      especial, a Bayesiana.
      Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
      chance/probabilidade bem definida de ocorrência a um determinado evento`
  },
  {
    nome: "Laura Rifo",
    instituicao: "UNICAMP",
    imagem: "/assets/images/americus.jpeg",
    titulo: "Modelagem probabilística na sala de aula",
    descricao:
      `Esta oficina faz parte de um estudo observacional sobre o ensino de probabilidade e
      pensamento inferencial através de problemas de modelagem matemática na formação inicial e
      continuada de professores de matemática. O marco teórico da pesquisa está centrado no
      Conhecimento Especializado do Professor de Matemática (MTSK) e na Modelagem
      Matemática para o ensino.`,
  },
]

const Palestrantes = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <Suspense fallback={<Loading />}>
      <h1>Palestrantes</h1>
      <main className={styles.main}>
          {/* <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentImage}>
                <Image src={americo} alt="Américo"/>
              </div>
              <div className={styles.contentInfo}>
                <h2>Edmilson Mota</h2>
                <p><span>Instituição: </span>ETAPA</p>
              </div>
            </div>
            <h2>Repensando as Probabilidades: fundamentos e aplicações</h2>
            <p>
            A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
            extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
            modo bastante superficial no Ensino Básico.
            Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
            problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
            especial, a Bayesiana.
            Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
            chance/probabilidade bem definida de ocorrência a um determinado evento
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentImage}>
                <Image src={americo} alt="Américo"/>
              </div>
              <div className={styles.contentInfo}>
                <h2>Edmilson Mota</h2>
                <p><span>Instituição: </span>ETAPA</p>
              </div>
            </div>
            <h2>Repensando as Probabilidades: fundamentos e aplicações</h2>
            <p>
            A Teoria de Probabilidades é um ramo muito profundo da Matemática e com aplicações
            extremamente relevantes em todas as áreas do conhecimento. Infelizmente, ele é tratado de
            modo bastante superficial no Ensino Básico.
            Nesta oficina vamos analisar os fundamentos da teoria de Probabilidades; refletir sobre os
            problemas da abordagem usual (Frequentista); e conhecer outras possíveis abordagens, em
            especial, a Bayesiana.
            Iremos até nos arriscar a colocar em questão o quanto faz sentido se atribuir uma
            chance/probabilidade bem definida de ocorrência a um determinado evento
            </p>
          </div> */}
        <div className={styles.container}>
        {palestrantesData.map((palestrante, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentImage}>
                <Image src={palestrante.imagem} alt={palestrante.nome} width={100} height={100} />
              </div>
              <div className={styles.contentInfo}>
                <h2>{palestrante.nome}</h2>
                <p>
                  <span>Instituição: </span>
                  {palestrante.instituicao}
                </p>
              </div>
            </div>
            <h2>{palestrante.titulo}</h2>
            <p className={styles.desc}>{palestrante.descricao}</p>
          </div>
          ))}
        </div>

      </main>
    </Suspense>
  )
}

export default Palestrantes