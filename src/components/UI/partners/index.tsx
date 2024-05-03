import styles from './styles.module.sass'
import sbm_logo from '@/../public/assets/images/sbm_logo.jpg'
import sbem_logo from '@/../public/assets/images/logo_sbem.png'
import usp_logo from '@/../public/assets/images/usp_logo.gif'
import anpmat_logo from '@/../public/assets/images/anpmat_logo.png'
import logo_dcm from '@/../public/assets/images/logo_dcm.jpg'

import Image from 'next/image'

const partners = () => {
  return(
    <section className={styles.partners}>
      <hr></hr>
      <div className={styles.contentImages}>
        <h3 className={styles.title}>
        Organização
        </h3>
        <div>
          <Image src={usp_logo} alt="logo 3" />
        </div>
        <div>
          <Image src={logo_dcm} alt="logo 3" />
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>Realização</h3>
        <div>
          <Image src={sbem_logo} alt="logo 2" />
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>Realização</h3>
        <div>
          <Image src={sbm_logo} alt="logo 1" />
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>Realização</h3>
        <div>
          <Image src={anpmat_logo} alt="logo 3" />
        </div>
      </div>
    </section>
  )
} 
export default partners