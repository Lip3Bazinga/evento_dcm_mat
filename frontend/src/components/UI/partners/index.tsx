import styles from './styles.module.sass'
import sbm_logo from '@/../public/assets/images/sbm_logo.png'
import sbem_logo from '@/../public/assets/images/sbem_logo.png'
import usp_logo from '@/../public/assets/images/usp_logo.gif'

import Image from 'next/image'

const partners = () => {

  return(
    <section className={styles.partners}>
      <div>
        <Image src={sbm_logo} alt="logo 1" />
      </div>
      <div>
        <Image src={sbem_logo} alt="logo 1" />
      </div>
      <div>
        <Image src={usp_logo} alt="logo 1" />
      </div>
    </section>
  )

}

export default partners