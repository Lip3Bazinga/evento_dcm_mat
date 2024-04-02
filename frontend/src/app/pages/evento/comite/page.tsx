import { Suspense } from "react"
import Loading from "../../../loading"
import styles from "./styles.module.sass"
import person from "../../../../../public/assets/images/person.jpg"
import Image from 'next/image'


const comite = () => {

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <section>
          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 1</h2>
            <p>Professor do dcm</p>
          </div>

          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 2</h2>
            <p>Professor do dcm</p>
          </div>

          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 3</h2>
            <p>Professor do dcm</p>
          </div>

          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 4</h2>
            <p>Professor do dcm</p>
          </div>

          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 5</h2>
            <p>Professor do dcm</p>
          </div>

          <div>
            <Image src={person} alt="person"/>
            <h2>Pessoa 6</h2>
            <p>Professor do dcm</p>
          </div>


        </section>
      </div>
    </Suspense>
  )
}

export default comite