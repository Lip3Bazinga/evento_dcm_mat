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
  <div className={styles.contentImages}>
    <h3 className={styles.title}>Organização</h3>
    <div className={styles.containerImages}>
      <div className={styles.logoWrapper}>
        <Image src={usp_logo} alt="Logo da Universidade de São Paulo" />
      </div>
      <div className={styles.logoWrapper}>
        <Image src={logo_dcm} alt="Logo do Departamento de Computação e Matemática" />
      </div>
    </div>
  </div>
  <div className={styles.contentImages}> 
    <h3>Realização</h3>
    <div className={styles.logoWrapper}>
      <Image src={sbem_logo} alt="Logo da SBEM" />
    </div>
  </div>
  <div className={styles.contentImages}>
    <h3>Realização</h3>
    <div className={styles.logoWrapper}>
      <Image src={sbm_logo} alt="Logo da SBM" />
    </div>
  </div>
  <div className={styles.contentImages}>
    <h3>Realização</h3>
    <div className={styles.logoWrapper}>
      <Image src={anpmat_logo} alt="logo 3" />
    </div>
  </div>
</section>

  )
} 
export default partners