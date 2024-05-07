import Map from "../../../components/maps/map"
import Image from 'next/image'
import av_cafe from "../../../../public/assets/images/av_cafe.jpg"
import av_bandeirantes from "../../../../public/assets/images/av_bandeirantes.jpg"
import styles from "./styles.module.sass"

export default function Local() {
  return (
    <main className={styles.container}>
      <h1>Mapa</h1>
      <h2>Departamento de Computação e Matemática da FFCLRP-USP - Campus da Usp, Ribeirão Preto - SP, 14040-900</h2>
      <Map />
      <div className={styles.contentImages}>
        <div className={styles.contentImage}>
          <Image src={av_cafe} alt="." />
          <p>Praça Fritz Koberle, 121 - Vila Monte Alegre, Ribeirão Preto - SP, 14051-099</p>
        </div>
        <div className={styles.contentImage}>
          <Image src={av_bandeirantes} alt="." />
          <p>Av. Bandeirantes, 2516 - Campus da Usp, Ribeirão Preto - SP, 14040-900</p>
        </div>
      </div>
    </main>
  );
}
