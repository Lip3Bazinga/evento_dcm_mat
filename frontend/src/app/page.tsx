import Header from "@/components/UI/header";
import banner from "../../public/assets/images/banner.jpeg"
import usp from "../../public/assets/images/usp_logo.gif"
import Partners from "@/components/UI/partners";
import Image from 'next/image'
import styles from './styles.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h2>Encontro de Formação de Professores de Matemática de Educação Básica
          <span>
            - Evento satélite da XI Bienal de Matemática
          </span>
        </h2>
        <Image src={banner} alt="Banner" priority  />
        <div></div>
      </div>
      <div className={styles.container}>
        <Image src={usp} alt="Logo da USP" />
        <p>
          Universidade de São Paulo
          <br></br>
          São paulo, Ribeirão Preto
          <br></br>
          10,11 e 12 de junho de 2023
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <h1>Evento da teoria espectral de grafos</h1>
          <p>
            Este evento é uma iniciativa conjunta da Sociedade Brasileira de Matemática (SBM), da
            Sociedade Brasileira de Educação Matemática (SBEM) e da Associação Nacional dos
            Professores de Matemática da Educação Básica (ANPMat), e acontecerá como um evento
            satélite da XI Bienal de Matemática. Esta é a primeira vez que essas três associações se unem
            para promover um evento de tal magnitude, com o propósito de conduzir uma discussão
            crucial e premente sobre o futuro do ensino de matemática na educação básica. Por meio
            deste evento, os participantes terão a oportunidade ímpar de trocar experiências entre o meio
            acadêmico e a realidade nas salas de aula da educação básica. Nosso objetivo é estreitar os
            laços entre docentes de diversas instituições de ensino superior e professores da rede básica,
            proporcionando atividades alinhadas com as linhas de pesquisa científica voltadas para o
            ensino de matemática e oferecendo formação continuada para os professores do ensino
            básico. Além disso, o evento visa criar um espaço inclusivo para que estudantes de mestrado
            profissional de diversas instituições possam compartilhar seus trabalhos por meio de pôsteres
            e interagir com pesquisadores mais experientes.
          </p>
        </div>
        <div className={styles.contentImage}>
          <Image src={banner} alt="Banner" priority  />
        </div>
       
      </div>

  
    </main>
  );
}
