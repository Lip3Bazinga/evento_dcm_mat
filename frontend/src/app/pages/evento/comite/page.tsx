import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"
import katia from "../../../../../public/assets/images/comite/katia_azevedo.jpg"
import vanessa from "../../../../../public/assets/images/comite/vanessa_rolnik.jpg"
import geraldine from "../../../../../public/assets/images/comite/geraldine.jpg"
import americo from "../../../../../public/assets/images/americus.jpeg"
import michele from "../../../../../public/assets/images/comite/michele_piere.jpg"
import cristina from "../../../../../public/assets/images/comite/cristina_cerri.jpeg"
import marta from "../../../../../public/assets/images/comite/Marta-Gadotti.jpg"
import jaqueline from "../../../../../public/assets/images/comite/presidenta-mais-jovem-da-sociedade-brasileira-de-matematica-toma-posse.jpg"
import claudia from "../../../../../public/assets/images/comite/claudia-groenwald-editada-300x287.jpg"
import marcela from "../../../../../public/assets/images/comite/marcela_luciano.png"

import Image from 'next/image'

const comite = () => {

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h2 className={styles.title}>Comissão organizadora</h2>
        <section>
          <div>
            <div>
              <Image src={katia} alt="person"/>
            </div>
            <h2>Katia A. Gonçalves de Azevedo</h2>
            <p>USP/FFCLRP</p>
          </div>
          <div>
            <div>
              <Image src={vanessa} alt="person"/>
            </div>
            <h2>Vanessa Rolnik Artioli</h2>
            <p>USP/FFCLRP</p>
          </div>
          <div>
            <div>
              <Image src={geraldine} alt="person"/>
            </div>
            <h2>Geraldine Goes Bosco</h2>
            <p>USP/FFCLRP</p>
          </div>
          <div>
            <div>
              <Image src={americo} alt="person"/>
            </div>
            <h2>Américo López Gálvez</h2>
            <p>USP/FFCLRP</p>
          </div>
          <div>
            <div>
              <Image src={michele} alt="person"/>
            </div>
            <h2>Michelle Fernanda Pierri Hernandez</h2>
            <p>USP/FFCLRP</p>
          </div>
          <div>
            <div>
              <Image src={cristina} alt="person"/>
            </div>
            <h2>Cristina Cerri</h2>
            <p>USP/IME</p>
          </div>
          <div>
            <div>
              <Image src={marta} alt="person"/>
            </div>
            <h2>Marta Cilene Gadotti</h2>
            <p>UNESP</p>
          </div>
        </section>
        <h2 className={styles.title}>Comitê científico</h2>
        <section>
          <div>
            <div>
              <Image src={jaqueline} alt="person"/>
            </div>
            <h2>Jaqueline Godoy Mesquita</h2>
          </div>
          <div>
            <div>
              <Image src={claudia} alt="person"/>
            </div>
            <h2>Claudia Lisete Oliveira Groenwald</h2>
          </div>
          <div>
            <div>
              <Image src={marcela} alt="person"/>
            </div>
            <h2>Marcela Luciano Vilela de Souza</h2>
          </div>
        </section>
      </div>
    </Suspense>
  )
}

export default comite