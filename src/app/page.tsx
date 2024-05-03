import Header from "@/components/UI/header";
import Partners from "@/components/UI/partners";

import banner from "../../public/assets/images/bg.jpg"
import usp from "../../public/assets/images/usp_logo.gif"
import calendario from "../../public/assets/calendar-outline.svg"


import Image from 'next/image'
import styles from './styles.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h2>Encontro de Formação de Professores de Matemática de Educação Básica</h2>
        <p>Evento satélite da XI Bienal de Matemática</p>
        <div className={styles.date}>
          <span>
            <Image src={calendario} alt="calendário" />
          </span>
          <p className={styles.info_date}>
            26, 27 de julho de 2024  
          </p>
        </div>
        <Image src={banner} alt="Banner" priority  />
        <div></div>
      </div>
    
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <h1>Sobre o evento: </h1>
          <p>
          O Encontro de Formação de Professores de Matemática da Educação Básica acontecerá nos dias 26 e 27 de julho de 2024 na Universidade de São Paulo, campus de Ribeirão Preto. 
Este evento é uma iniciativa conjunta da Sociedade Brasileira de Matemática (SBM), da Sociedade Brasileira de Educação Matemática (SBEM) e da Associação Nacional dos Professores de Matemática da Educação Básica (ANPMat), e acontecerá como um
evento satélite da Bienal de Matemática. 

<br></br>
Os participantes terão a oportunidade ímpar de trocar experiências entre o meio acadêmico e a realidade nas salas de aula da educação básica. 

Em paralelo,  estudantes de mestrado profissional de diversas instituições podem compartilhar seus trabalhos por meio de pôsteres e interagir com pesquisadores mais experientes. 

Juntos, poderemos explorar soluções inovadoras e colaborativas para os desafios enfrentados no ensino da matemática, promovendo assim um ensino mais inclusivo e de qualidade. 

Esperamos você!
          </p>
        </div>
        <div className={styles.contentImage}>
          <Image src={banner} alt="Banner" priority  />
        </div>
       
      </div>

  
    </main>
  );
}
