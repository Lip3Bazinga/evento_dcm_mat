import Header from "@/components/UI/header";
import banner from "../../public/assets/images/banner.jpeg"
import usp from "../../public/assets/images/usp_logo.gif"
import Partners from "@/components/UI/partners";
import Image from 'next/image'
import styles from './styles.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Image src={banner} alt="Banner" priority  />

      <div>
        <Image src={usp} alt="Logo da USP" />
        <p>
          Universidade de São Paulo
          <br></br>
          São paulo, Ribeirão Preto
          <br></br>
          10,11 e 12 de junho de 2023
        </p>
      </div>

      <h1>Evento da teoria espectral de grafos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil facere ad unde adipisci, rem animi et nesciunt error quos eligendi ipsum maxime ratione debitis deleniti enim minima laboriosam voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus iusto. Hic cupiditate repudiandae, quisquam culpa, blanditiis dolores mollitia deserunt minima quasi veritatis at autem corrupti? Laborum, odio dolores. Ut!
      </p>
    </main>
  );
}
